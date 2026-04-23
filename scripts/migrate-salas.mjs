/**
 * migrate-salas.mjs
 * Substitui "Capacidade do maior espaço (auditório)" e "Número de salas" (texto)
 * por um array estruturado `salas` em hoteis.json.
 *
 * Run: node scripts/migrate-salas.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const JSON_PATH = resolve(__dirname, "../src/data/hoteis.json");

/** @type {Record<string, Array<{nome:string,pax:number,tipo:string}>>} */
const SALAS = {
  "Royal Palm Plaza": [
    { nome: "Imperial (10 mód.)", pax: 1100, tipo: "auditório" },
    { nome: "Casa de Campo", pax: 900, tipo: "auditório" },
    { nome: "Paço dos Nobres (4 mód.)", pax: 420, tipo: "auditório" },
    { nome: "Arena de Pedra", pax: 160, tipo: "auditório" },
    { nome: "Infante Dom Henrique", pax: 130, tipo: "auditório" },
    { nome: "Dom Pedro (4 mód.)", pax: 120, tipo: "auditório" },
    { nome: "Dom João (3 mód.)", pax: 90, tipo: "auditório" },
    { nome: "Lumini (cinema)", pax: 70, tipo: "auditório" },
    { nome: "Sala de apoio A", pax: 30, tipo: "apoio" },
    { nome: "Sala de apoio B", pax: 24, tipo: "apoio" },
    { nome: "Sala de apoio C", pax: 24, tipo: "apoio" },
    { nome: "Sala de apoio D", pax: 15, tipo: "apoio" },
    { nome: "Sala de apoio E", pax: 15, tipo: "apoio" },
    { nome: "Boardroom A", pax: 18, tipo: "boardroom" },
    { nome: "Boardroom B", pax: 12, tipo: "boardroom" },
    { nome: "Foyer Imperial", pax: 800, tipo: "coquetel" },
    { nome: "Varanda Casa de Campo", pax: 550, tipo: "coquetel" },
    { nome: "Foyer Paço dos Nobres", pax: 250, tipo: "coquetel" },
    { nome: "Foyer Infante Dom Henrique", pax: 100, tipo: "coquetel" },
  ],

  "Royal Palm Tower Anhanguera": [
    { nome: "Salão Anhanguera (3 mód.) + Foyer", pax: 600, tipo: "auditório" },
    { nome: "Sala Flamboyant", pax: 40, tipo: "auditório" },
    { nome: "Sala Figueira", pax: 40, tipo: "auditório" },
    { nome: "Foyer", pax: 200, tipo: "coquetel" },
  ],

  "Hotel Contemporâneo": [],

  "Royal Palm Hall": [
    { nome: "Salão Monumental (7 mód.)", pax: 5000, tipo: "auditório" },
    { nome: "Sala Campinas", pax: 600, tipo: "auditório" },
    { nome: "Sala Paineiras (3 mód.)", pax: 140, tipo: "auditório" },
    { nome: "Piso Buriti — sala master", pax: 120, tipo: "auditório" },
    { nome: "Sala Jatobá (3 mód.)", pax: 70, tipo: "auditório" },
    { nome: "Piso Buriti (4 salas)", pax: 80, tipo: "auditório" },
    { nome: "Piso Jacarandá — salas grandes (2)", pax: 70, tipo: "auditório" },
    { nome: "Piso Jacarandá (12 salas)", pax: 55, tipo: "auditório" },
    { nome: "Piso Laranjeira (14 salas)", pax: 36, tipo: "auditório" },
    { nome: "Foyers (3)", pax: 1300, tipo: "coquetel" },
    { nome: "Foyer Campinas B", pax: 850, tipo: "coquetel" },
    { nome: "Foyer Campinas A", pax: 500, tipo: "coquetel" },
    { nome: "Salão de Exposições", pax: 0, tipo: "outro" },
  ],

  "Royal Palm Tower Indaiatuba": [
    { nome: "Salão Santos Dumont (4 mód.)", pax: 450, tipo: "auditório" },
    { nome: "Suíte executiva A", pax: 0, tipo: "apoio" },
    { nome: "Suíte executiva B", pax: 0, tipo: "apoio" },
    { nome: "Suíte executiva C", pax: 0, tipo: "apoio" },
    { nome: "Suíte executiva D", pax: 0, tipo: "apoio" },
    { nome: "Suíte executiva E", pax: 0, tipo: "apoio" },
    { nome: "Suíte executiva F", pax: 0, tipo: "apoio" },
    { nome: "Foyer", pax: 150, tipo: "coquetel" },
  ],

  "Oceania Park Hotel e Convention Center": [
    { nome: "Sala Diamante", pax: 2000, tipo: "auditório" },
    { nome: "Salas Ágata + Topázio (4 mód.)", pax: 620, tipo: "auditório" },
    { nome: "Mezanino", pax: 300, tipo: "auditório" },
    { nome: "Sala Esmeralda (2 mód.)", pax: 300, tipo: "auditório" },
    { nome: "Sala hotel A", pax: 100, tipo: "auditório" },
    { nome: "Sala hotel B", pax: 80, tipo: "auditório" },
    { nome: "Foyer", pax: 500, tipo: "banquete" },
  ],

  "Iate Hotel": [
    { nome: "Sala B", pax: 120, tipo: "auditório" },
    { nome: "Sala A", pax: 100, tipo: "auditório" },
  ],

  "Hotel 7": [
    { nome: "Sala Mar", pax: 60, tipo: "auditório" },
    { nome: "Sala Terra", pax: 20, tipo: "auditório" },
  ],

  "Vila Galé Alagoas": [
    { nome: "Master", pax: 1200, tipo: "auditório" },
    { nome: "Foyer", pax: 700, tipo: "auditório" },
    { nome: "Fernando Pessoa", pax: 60, tipo: "auditório" },
    { nome: "Eça de Queiroz", pax: 48, tipo: "auditório" },
    { nome: "Jorge Amado", pax: 40, tipo: "auditório" },
    { nome: "Carlos Drummond de Andrade", pax: 40, tipo: "auditório" },
  ],

  "Vila Galé Cumbuco": [
    { nome: "Marés", pax: 450, tipo: "auditório" },
    { nome: "Salvador", pax: 200, tipo: "auditório" },
    { nome: "Cumbuco", pax: 150, tipo: "auditório" },
    { nome: "Fortaleza", pax: 30, tipo: "auditório" },
    { nome: "Angra", pax: 30, tipo: "auditório" },
    { nome: "Tavira", pax: 30, tipo: "auditório" },
    { nome: "Albacora", pax: 30, tipo: "auditório" },
  ],

  "Vila Galé Eco Resort Angra": [
    { nome: "Ballroom", pax: 1500, tipo: "auditório" },
    { nome: "Ballroom Enseada", pax: 400, tipo: "auditório" },
    { nome: "Brisa 3", pax: 230, tipo: "auditório" },
    { nome: "Centauro 1", pax: 230, tipo: "auditório" },
    { nome: "Centauro 2", pax: 230, tipo: "auditório" },
    { nome: "Centauro 3", pax: 230, tipo: "auditório" },
    { nome: "Brisa 1", pax: 168, tipo: "auditório" },
    { nome: "Brisa 2", pax: 168, tipo: "auditório" },
    { nome: "Enseada 5", pax: 110, tipo: "auditório" },
    { nome: "Enseada 1", pax: 50, tipo: "auditório" },
    { nome: "Enseada 2", pax: 50, tipo: "auditório" },
    { nome: "Enseada 3", pax: 50, tipo: "auditório" },
    { nome: "Enseada 4", pax: 50, tipo: "auditório" },
  ],

  "Vila Galé Eco Resort do Cabo": [
    { nome: "Esmeralda (1+2+3)", pax: 700, tipo: "configuração" },
    { nome: "Aquarius (1+2+3)", pax: 500, tipo: "configuração" },
    { nome: "Esmeralda 1", pax: 250, tipo: "auditório" },
    { nome: "Aquarius 3", pax: 180, tipo: "auditório" },
    { nome: "Esmeralda 2", pax: 200, tipo: "auditório" },
    { nome: "Esmeralda 3", pax: 200, tipo: "auditório" },
    { nome: "Aquarius 1", pax: 140, tipo: "auditório" },
    { nome: "Água Marinha (1+2)", pax: 130, tipo: "auditório" },
    { nome: "Aquarius 2", pax: 100, tipo: "auditório" },
    { nome: "Turmalina", pax: 60, tipo: "auditório" },
    { nome: "Ametista", pax: 60, tipo: "auditório" },
    { nome: "Ágata", pax: 60, tipo: "auditório" },
    { nome: "Business Center", pax: 30, tipo: "boardroom" },
  ],

  "Vila Galé Fortaleza": [
    { nome: "Vinicius de Morais + José de Alencar", pax: 800, tipo: "configuração" },
    { nome: "Vinicius de Morais", pax: 400, tipo: "auditório" },
    { nome: "José de Alencar", pax: 400, tipo: "auditório" },
    { nome: "Fernando Pessoa", pax: 300, tipo: "auditório" },
    { nome: "Eça de Queiroz", pax: 300, tipo: "auditório" },
    { nome: "Iracema", pax: 150, tipo: "auditório" },
    { nome: "Vasco da Gama", pax: 150, tipo: "auditório" },
    { nome: "Tom Jobim", pax: 50, tipo: "auditório" },
    { nome: "Amália Rodrigues", pax: 50, tipo: "auditório" },
  ],

  "Vila Galé Marés": [
    { nome: "Salão Marés", pax: 840, tipo: "auditório" },
    { nome: "Salão Master Jorge Amado", pax: 600, tipo: "auditório" },
    { nome: "Salão Master Galé", pax: 180, tipo: "auditório" },
  ],

  "Vila Galé Paulista": [],

  "Vila Galé Rio de Janeiro": [
    { nome: "Salão Master", pax: 350, tipo: "auditório" },
    { nome: "Mangueira", pax: 0, tipo: "auditório" },
    { nome: "Portela", pax: 0, tipo: "auditório" },
    { nome: "Vila Isabel", pax: 0, tipo: "auditório" },
    { nome: "Salgueiro", pax: 0, tipo: "auditório" },
    { nome: "Grande Rio", pax: 0, tipo: "auditório" },
  ],

  "Vila Galé Salvador": [
    { nome: "Pablo Neruda", pax: 200, tipo: "auditório" },
    { nome: "Vinicius de Moraes", pax: 0, tipo: "auditório" },
    { nome: "Tom Jobim", pax: 0, tipo: "auditório" },
    { nome: "Noel Rosa", pax: 0, tipo: "auditório" },
    { nome: "Ari Barroso", pax: 0, tipo: "auditório" },
  ],

  "Vila Galé Touros": [
    { nome: "Master", pax: 1200, tipo: "auditório" },
    { nome: "Cumbuco", pax: 0, tipo: "auditório" },
    { nome: "Marés", pax: 0, tipo: "auditório" },
    { nome: "Salvador", pax: 0, tipo: "auditório" },
    { nome: "Fortaleza", pax: 0, tipo: "auditório" },
    { nome: "Foyer", pax: 0, tipo: "coquetel" },
  ],

  "Vila Galé Collection Amazônia": [
    { nome: "Sala Master Carlos Gomes", pax: 450, tipo: "auditório" },
  ],

  "Vila Galé Ouro Preto": [
    { nome: "Salão Master Tiradentes", pax: 500, tipo: "auditório" },
  ],

  "Intercity Portofino": [
    { nome: "Sala principal", pax: 250, tipo: "auditório" },
    { nome: "Sala 2", pax: 0, tipo: "auditório" },
    { nome: "Sala 3", pax: 0, tipo: "auditório" },
  ],

  "Intercity Centro": [
    { nome: "Sala principal", pax: 150, tipo: "auditório" },
    { nome: "Sala 2", pax: 0, tipo: "auditório" },
  ],

  Sibara: [
    { nome: "Salão principal", pax: 1200, tipo: "auditório" },
    { nome: "Sala 2", pax: 0, tipo: "auditório" },
    { nome: "Sala 3", pax: 0, tipo: "auditório" },
    { nome: "Sala 4", pax: 0, tipo: "auditório" },
    { nome: "Sala 5", pax: 0, tipo: "auditório" },
    { nome: "Sala 6", pax: 0, tipo: "auditório" },
    { nome: "Sala 7", pax: 0, tipo: "auditório" },
    { nome: "Sala 8", pax: 0, tipo: "auditório" },
    { nome: "Sala 9", pax: 0, tipo: "auditório" },
    { nome: "Sala 10", pax: 0, tipo: "auditório" },
    { nome: "Sala 11", pax: 0, tipo: "auditório" },
    { nome: "Sala 12", pax: 0, tipo: "auditório" },
  ],
};

const raw = JSON.parse(readFileSync(JSON_PATH, "utf-8"));

const migrated = raw.map((hotel) => {
  const name = hotel.hotel;
  if (!(name in SALAS)) {
    console.warn(`⚠️  Hotel sem mapeamento de salas: "${name}"`);
  }

  // Remove campos legados, adiciona salas estruturado
  const {
    "Capacidade do maior espaço (auditório)": _cap,
    "Número de salas": _num,
    ...rest
  } = hotel;

  return {
    ...rest,
    salas: SALAS[name] ?? [],
  };
});

writeFileSync(JSON_PATH, JSON.stringify(migrated, null, 4), "utf-8");
console.log(`✅ hoteis.json migrado — ${migrated.length} hotéis.`);
