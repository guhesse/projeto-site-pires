# Design System — Pires Landing Page

> Documento de referência de design extraído do Figma.
> Arquivo: [Pires - Landing page](https://www.figma.com/design/IobE1W9fwWVB0U1mBnmcAc/Pires---Landing-page)
> Última atualização do Figma: 07/04/2026

---

## 1. Paleta de Cores

| Token              | Hex       | Uso                                    |
|--------------------|-----------|----------------------------------------|
| `brand-bg`         | `#E2D8DA` | Background global da página            |
| `brand-card`       | `#F0EBEE` | Background de cards e seções           |
| `brand-primary`    | `#A0125A` | Cor primária (magenta/vinho) — CTAs, labels, destaques |
| `brand-dark`       | `#3A0814` | Texto escuro principal (navbar, headings) |
| `brand-dark-alt`   | `#1E1E1E` | Texto secundário                       |
| `brand-active`     | `#BA2C73` | Link ativo / estado selecionado        |
| `brand-muted`      | `#6B5860` | Texto secundário / descrições          |
| `brand-muted-warm` | `#A78991` | Texto de descrição mais suave (stats, features) |
| `brand-border`     | `#C8B8BE` | Bordas, divisores                      |
| `brand-primary-hover` | `#8A0F4E` | Estado hover da cor primária        |

### Variáveis CSS (globals.css)
```css
--background: #E2D8DA;
--foreground: #1E1E1E;
--card: #F0EBEE;
--primary: #A0125A;
--primary-foreground: #FFFFFF;
--muted: #D4C8CC;
--muted-foreground: #6B5860;
--border: #C8B8BE;
--radius: 1.5625rem; /* 25px */
```

---

## 2. Tipografia

**Família primária:** `Sofia Pro`
- Importada via: `<link>` em `layout.tsx` → `https://fonts.cdnfonts.com/css/sofia-pro`
- Peso padrão: `400` (regular)
- Não usa bold como convenção — a hierarquia é feita por tamanho

**Família secundária (botões):** `Geist`
- Peso: `500` (medium)
- Uso: Textos de botões CTA

### Escala de Tamanhos

| Uso                       | Tamanho  | Peso | Classe Tailwind           |
|---------------------------|----------|------|---------------------------|
| Heading principal (H1/H2) | `56px`   | 400  | `text-[56px] font-normal` |
| Subtítulo de seção        | `32px`   | 400  | `text-[32px] font-normal` |
| Body grande / descrições  | `24px`   | 400  | `text-[24px] font-normal` |
| Navegação / labels        | `20px`   | 400  | `text-[20px] font-normal` |
| Body padrão               | `16px`   | 400  | `text-[16px] font-normal` |
| Tags / small              | `14px`   | 400  | `text-[14px]`             |

### Line-height para headings
```
leading-[1.1]
```

---

## 3. Espaçamentos e Layout

### Grid
- **Largura máxima do conteúdo:** `1380px` (`max-w-[1380px] mx-auto`)
- **Padding lateral da página:** `px-6` (24px) — wrapping externo
- **Padding interno dos cards/seções:** `px-14 py-[72px]` (56px / 72px)
- **Gap entre seções:** `gap-6` (24px) — layout vertical com `flex flex-col gap-6`
- **Gap interno dentro de seções:** `gap-10` (40px)

### Border Radius
- **Cards e seções:** `rounded-[25px]` — padrão de todo o design
- **Botões pill/CTA:** `rounded-full`
- **Dropdown menus:** `rounded-2xl`
- **Inputs do formulário:** `rounded-[16px]`

---

## 4. Componentes

### 4.1 Seção / Card Container
Padrão usado em todas as seções:

```tsx
<section className="px-6 pb-6">
  <div className="w-full max-w-[1380px] mx-auto">
    <div className="rounded-[25px] bg-[#F0EBEE] px-14 py-[72px] flex flex-col gap-10">
      {/* conteúdo */}
    </div>
  </div>
</section>
```

### 4.2 CTA Button (Primary)

Botão principal — Figma: Type=Primary, Size=md

```tsx
<a
  href="#contato"
  className="inline-flex items-center justify-center bg-[#A0125A] hover:bg-[#8a0f4e] text-white rounded-[30px] px-[28px] py-[12px] text-[20px] font-medium transition-colors w-fit"
  style={{ fontFamily: "Geist, sans-serif" }}
>
  Texto do botão
</a>
```

### 4.3 CTA Link (texto)
```tsx
<a
  href="#"
  className="inline-flex items-center gap-2 text-[#A0125A] text-[20px] font-normal hover:underline w-fit"
>
  Ver todos
  <ArrowRight className="h-5 w-5" />
</a>
```

### 4.4 Label de seção
```tsx
<p className="text-[#A0125A] text-[20px]">Rótulo da seção</p>
```

### 4.5 Heading de seção (H2)
```tsx
<h2 className="text-[56px] leading-[1.1] font-normal max-w-[680px]">
  Título da Seção
</h2>
```

### 4.6 Card de conteúdo
```tsx
<div className="rounded-[25px] bg-[#E2D8DA] p-8 flex flex-col gap-4">
  {/* conteúdo */}
</div>
```

### 4.7 Input de formulário
```tsx
<input
  type="text"
  placeholder="Placeholder"
  className="w-full rounded-[16px] bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-6 py-4 text-[16px] outline-none focus:border-white/60 transition-colors"
/>
```

---

## 5. Estrutura de Seções da Landing Page

| # | Seção                    | ID                    | Componente                    | Altura (Figma) |
|---|--------------------------|-----------------------|-------------------------------|----------------|
| 1 | Navbar                   | —                     | `Navbar.tsx`                  | 89px           |
| 2 | Hero                     | `#home`               | `sections/Hero.tsx`           | 1084px         |
| 3 | Curadoria de Locais      | `#para-quem-organiza` | `sections/CuradoriaLocais.tsx`| 615px          |
| 4 | Terceirização Comercial  | `#para-seu-espaco`    | `sections/TerceirizacaoComercial.tsx` | 653px |
| 5 | Portfólio de Locais      | `#locais`             | `sections/Portfolio.tsx`      | 555px          |
| 6 | Prospecção Ativa         | `#prospeccao`         | `sections/ProspeccaoAtiva.tsx`| 990px          |
| 7 | Mais seções              | —                     | —                             | 643px / 555px  |
| 8 | Depoimentos              | `#depoimentos`        | `sections/Depoimentos.tsx`    | 898px          |
| 9 | FAQ                      | `#faq`                | `sections/FAQ.tsx`            | 670px          |
|10 | Contato / Formulário     | `#contato`            | `sections/Contato.tsx`        | —              |
|11 | Footer                   | —                     | `sections/Footer.tsx`         | 200px          |

---

## 6. Navbar (Figma: Frame 48 / Node 15:3070)

- **Posição:** `fixed top-6` — flutuante com espaço do topo
- **Background:** `bg-[#F0EBEE]/90 backdrop-blur-sm`
- **Dimensões:** 1380×89px
- **Border radius:** `rounded-[25px]` (cornerRadius=25)
- **Padding:** `px-[36px] py-[16px]`
- **Layout:** `HORIZONTAL`, `justify-between`

### Filhos:
1. **Logo PIRES** (Group 10): SVG ~126×37px, cor `#3A0814`
2. **Frame 50** (links): `HORIZONTAL`, gap=52px
   - "Home" — Sofia Pro 20px/400, cor `#3A0814`
   - "Locais" — Sofia Pro 20px/400, cor `#3A0814`
   - "Para quem organiza" — Sofia Pro 20px/400, cor `#3A0814`
   - "Para seu espaço" — Sofia Pro 20px/400, cor `#BA2C73` (link ativo)
3. **Button CTA**: "Falar com um especialista"
   - `bg-[#A0125A]`, `rounded-[30px]`, `px-[28px] py-[12px]`
   - Geist 20px/500, texto branco
   - Sem ícone leading/trailing

---

## 6.1 Hero (Figma: Frame40 / Node 4:19085)

### Frame40 (container externo — card):
- **Dimensões:** 1380×1084px
- **Background:** `bg-[#F0EBEE]`, `rounded-[25px]`
- **Padding:** `pl-[54px] pt-[72px] pr-[53px] pb-[42px]`
- **Layout:** `VERTICAL`, gap=10px

### Frame39 (wrapper interno):
- **Dimensões:** 1273×970px
- **Layout:** `VERTICAL`, gap=54px

### Frame38 (top row — heading + CTA):
- **Layout:** `HORIZONTAL`, gap=88px
- **Filho esquerdo:** Heading
  - "Inteligência e Negócios\npara o seu Espaço ou Evento."
  - Sofia Pro 56px/400, cor `#3A0814`, max-w 671px
- **Filho direito:** Frame37 (486×128)
  - Layout: `VERTICAL`, gap=20px
  - Button: "Quero representar meu espaço" — Geist 20px/500, `bg-[#A0125A]`, `rounded-[30px]`, pad 28/12
  - Texto: "30 anos conectando os melhores destinos..." — Sofia Pro 20px/400

### Rectangle1 (imagem hero):
- **Dimensões:** 1273×627px, `rounded-[25px]`
- **Tipo:** IMAGE fill (usar placeholder/next Image)

### Frame1 (logos parceiros)
- **Layout:** `HORIZONTAL`, gap=60px
- 7 logos:
  - Vila Galé (68×63), Sibara (123×40), Hotel Seven (136×36)
  - Intercity (183×67), Oceania (133×91), Costão do Santinho (88×91), Royal Palm (107×107)

---

## 6.2 Estatísticas (Figma: Group 5 / Node 4:19086)

### Frame 36 (card container)
- **Dimensões:** 1380×615px
- **Background:** `bg-[#F0EBEE]`, `rounded-[25px]`
- **Padding:** `pl-[54px] pr-[111px] pt-[72px] pb-[72px]`

### Frame 35 (inner)
- **Layout:** `VERTICAL`, gap=121px

### Conteúdo
- **Heading:** "30 anos de atuação no mercado nacional e internacional." — Sofia Pro 56px/400, `#3A0814`
- **Frame 2** (stats row): `HORIZONTAL`, gap=74px
  - "+10.000" — Sofia Pro 96px/400, `#3A0814` + descrição 24px, `#A78991`
  - "+5.000" — Sofia Pro 96px/400, `#3A0814` + descrição 24px, `#A78991`
  - "90M" — Sofia Pro 96px/400, `#3A0814` + descrição 24px, `#A78991`

---

## 6.3 Curadoria de Locais (Figma: Group 6 / Node 4:19087)

### Frame 34 (card container)
- **Dimensões:** 1380×653px
- **Background:** `bg-[#F0EBEE]`, `rounded-[25px]`
- **Padding:** `pl-[54px] pr-[130px] pt-[72px] pb-[72px]`

### Frame 33 (inner)
- **Layout:** `VERTICAL`, gap=121px

### Conteúdo
- **Heading:** "Curadoria de Locais:\nPara quem organiza eventos" — Sofia Pro 56px/400, `#3A0814`
- **Frame 32** (features row): `HORIZONTAL`, gap=99px
  - 3 feature cards (329×250 cada): `VERTICAL`, gap=29px
    - Ícone container (71×71), stroke `#3A0814`, strokeWidth 1.5
    - Título: Sofia Pro 32px/400, `#3A0814`
    - Descrição: Sofia Pro 24px/400, `#A78991`

### Ícones Lucide usados
- `DoorOpen` → "Destino Estratégico"
- `PlaneTakeoff` → "Logística Sob Medida"
- `ConciergeBell` → "Expertise de Mercado"

---

## 7. Princípios de Design

1. **Suavidade:** Cantos arredondados (`border-radius: 25px`) em todos os containers
2. **Espaço:** Generoso uso de espaço em branco — `padding: 72px vertical, 56px horizontal`
3. **Hierarquia por tamanho:** Não usa negrito — a hierarquia é feita pelo tamanho da tipografia
4. **Cor única:** Uma cor primária (`#A0125A`) usada com parcimônia para CTAs e labels
5. **Background warm:** Tom rosado/nude (`#E2D8DA`) como background — não é branco
6. **Cards flutuantes:** Seções são cards independentes com `bg-[#F0EBEE]` sobre o background

---

## 8. Responsividade

O design foi criado primeiramente para **desktop (1428px)**. Adaptar seguindo:

| Breakpoint | Largura   | Adaptações principais                                    |
|------------|-----------|----------------------------------------------------------|
| `sm`       | 640px+    | Botões em linha, 2 colunas                              |
| `md`       | 768px+    | Navbar desktop, grids 2-3 colunas, layout side-by-side  |
| `lg`       | 1024px+   | 4 colunas para steps, layout completo                   |
| `xl`       | 1280px+   | Conteúdo centrado com max-w-[1380px]                    |

---

## 9. Ícones

- **Biblioteca:** [Lucide React](https://lucide.dev/icons/)
- **Instalação:** `npm install lucide-react`
- **Uso nos CTAs:** `ArrowRight` (h-4 w-4 ou h-5 w-5)
- **Navbar mobile:** `Menu` (h-6 w-6)

---

## 10. Stack Técnica

```
Next.js 15 (App Router)
TypeScript
Tailwind CSS v4
ShadCN UI (base-ui)
Lucide React
```

### Componentes ShadCN instalados
- `button`
- `navigation-menu`
- `card`
- `badge`
- `separator`
- `sheet` (menu mobile)
- `accordion`
- `tabs`
