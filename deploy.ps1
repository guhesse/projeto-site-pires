# ============================================================
# Script de Deploy - Pires Landing → Hostinger (SSH/SCP)
# ============================================================
# Pré-requisito: OpenSSH instalado no Windows
#   winget install Microsoft.OpenSSH.Beta   (se não tiver)
# Senha SSH: preencher a variável abaixo ou digitar quando pedida
# ============================================================

$SSH_HOST = "212.85.6.169"
$SSH_PORT = "65002"
$SSH_USER = "u236296388"
$REMOTE_DIR = "/home/u236296388/domains/piresdestinoseventos.com.br/public_html"

# ── 1. Build local ────────────────────────────────────────────
Write-Host "`n▶ Instalando dependências..." -ForegroundColor Cyan
npm install

Write-Host "`n▶ Gerando build de produção (standalone)..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { Write-Error "Build falhou. Deploy cancelado."; exit 1 }

# ── 2. Preparar pasta de upload ───────────────────────────────
Write-Host "`n▶ Preparando arquivos para upload..." -ForegroundColor Cyan

$STAGE = ".\deploy_stage"
Remove-Item -Recurse -Force $STAGE -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path $STAGE | Out-Null

# Standalone já inclui tudo que o servidor precisa
Copy-Item -Recurse ".\.next\standalone\*"  $STAGE
Copy-Item -Recurse ".\.next\static"        "$STAGE\.next\static"
Copy-Item -Recurse ".\public"              "$STAGE\public"

# Script de inicialização para a Hostinger (Node.js app)
@"
#!/bin/bash
export NODE_ENV=production
export PORT=3000
node /home/u236296388/domains/piresevents.com.br/public_html/server.js
"@ | Set-Content "$STAGE\start.sh" -Encoding UTF8

# ── 3. Limpar WordPress no servidor e enviar arquivos ─────────
Write-Host "`n▶ Conectando ao servidor SSH..." -ForegroundColor Cyan

$SSH_CMD = "ssh -p $SSH_PORT -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST}"

# Remover WordPress (mantém a pasta public_html mas limpa o conteúdo)
Write-Host "`n▶ Removendo arquivos WordPress do servidor..." -ForegroundColor Yellow
Invoke-Expression "$SSH_CMD 'find $REMOTE_DIR -mindepth 1 -delete && echo Limpeza concluída'"

# Upload via SCP (recursivo)
Write-Host "`n▶ Enviando arquivos para o servidor..." -ForegroundColor Cyan
scp -P $SSH_PORT -r "$STAGE\*" "${SSH_USER}@${SSH_HOST}:${REMOTE_DIR}/"

if ($LASTEXITCODE -ne 0) { Write-Error "Upload falhou."; exit 1 }

# ── 4. Ajustar permissões e reiniciar app ─────────────────────
Write-Host "`n▶ Configurando servidor..." -ForegroundColor Cyan
Invoke-Expression "$SSH_CMD '
  chmod +x $REMOTE_DIR/start.sh
  # Matar processo Node.js anterior (se houver)
  pkill -f \"node.*server.js\" 2>/dev/null || true
  # Iniciar app em background com nohup
  cd $REMOTE_DIR && nohup node server.js > app.log 2>&1 &
  echo App iniciado. PID: \$!
'"

# ── 5. Limpeza local ──────────────────────────────────────────
Remove-Item -Recurse -Force $STAGE
Write-Host "`n✅ Deploy concluído! Acesse o site e verifique." -ForegroundColor Green
Write-Host "   Para ver logs do servidor: ssh -p $SSH_PORT ${SSH_USER}@${SSH_HOST} 'tail -f $REMOTE_DIR/app.log'" -ForegroundColor Gray
