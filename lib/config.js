export const START_DATE_NON_WORSHIP_GOVERNING_BODY =
  process.env.START_DATE_NON_WORSHIP_GOVERNING_BODY || "2019-01-01T00:00:00";
export const END_DATE_NON_WORSHIP_GOVERNING_BODY =
  process.env.END_DATE_NON_WORSHIP_GOVERNING_BODY;
export const START_DATE_WORSHIP_GOVERNING_BODY =
  process.env.START_DATE_WORSHIP_GOVERNING_BODY || "2020-04-01T00:00:00";
export const END_DATE_WORSHIP_GOVERNING_BODY =
  process.env.END_DATE_WORSHIP_GOVERNING_BODY || "2023-03-31T00:00:00";

export const ADMIN_UNIT_CLASSIFICATIONS = {
  AGB: "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/36a82ba0-7ff1-4697-a9dd-2e94df73b721",
  APB: "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/80310756-ce0a-4a1b-9b8e-7c01b6cc7a2d",
  HULPVERLENINGSZONE:
    "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/ea446861-2c51-45fa-afd3-4e4a37b71562",
  POLITIEZONE:
    "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/a3922c6d-425b-474f-9a02-ffb71a436bfc",
  // Note: the OCMW verenigingen classification is not used in OP, only it's sub
  // classifications
  // OCMW_VERENIGING:
  //   "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/cc4e2d67-603b-4784-9b61-e50bac1ec089",
  WELZIJNSVERENIGING:
    "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/e8294b73-87c9-4fa2-9441-1937350763c9",
  // Note: the following 4 UUIDs are chosen by OP, they might need to be changed
  // if upstream ends up using different ones
  AUTONOME_VERZORGINGSINSTELLING:
    "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/34b5af85-dc9f-468f-9e03-ef89b174c267",
  // Note: the following 3 classifications are legally not administrative units
  // but registered organisations
  ZIEKENHUISVERENIGING:
    "http://data.vlaanderen.be/id/concept/GeregistreerdeOrganisatieClassificatieCode/82250452-83a0-48f4-89cc-b430320493ce",
  VERENIGING_OF_VENNOOTSCHAP_VOOR_SOCIALE_DIENSTVERLENING:
    "http://data.vlaanderen.be/id/concept/GeregistreerdeOrganisatieClassificatieCode/35833ba2-7371-400b-8df2-2912f66fb153",
  WOONZORGVERENIGING_OF_WOONZORGVENNOOTSCHAP:
    "http://data.vlaanderen.be/id/concept/GeregistreerdeOrganisatieClassificatieCode/82fd21dc-e8bb-4d13-a010-f4a12358ef10",
  DIENSTVERLENENDE_VERENIGING:
    "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/d01bb1f6-2439-4e33-9c25-1fc295de2e71",
  OPDRACHTHOUDENDE_VERENIGING:
    "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/cd93f147-3ece-4308-acab-5c5ada3ec63d",
  OPDRACHTHOUDENDE_VERENIGING_MET_PRIVATE_DEELNAME:
    "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/4b8450cf-a326-4c66-9e63-b4ec10acc7f6",
  PROJECTVERENIGING:
    "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/b156b67f-c5f4-4584-9b30-4c090be02fdc",
  PROVINCIE:
    "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/5ab0e9b8a3b2ca7c5e000000",
  GEMEENTE:
    "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/5ab0e9b8a3b2ca7c5e000001",
  OCMW: "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/5ab0e9b8a3b2ca7c5e000002",
  DISTRICT:
    "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/5ab0e9b8a3b2ca7c5e000003",
  VGC: "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/d90c511e-f827-488c-84ba-432c8f69561c",
  EB: "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/66ec74fd-8cfc-4e16-99c6-350b35012e86",
  CB: "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/f9cac08a-13c1-49da-9bcb-f650b0604054",
  PEVA_MUNICIPALITY:
    "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/2ad46df5-5c79-4d67-84d5-604c1377231e",
  PEVA_PROVINCE:
    "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/088784b6-e188-48bf-b94f-94665f9e1f53",
};

const gemeente = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/4955bd72cd0e4eb895fdbfab08da0284", // Burgemeester
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000005", // Gemeenteraad
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000006", // College van Burgemeester en Schepenen
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/39854196-f214-4688-87a1-d6ad12baa2fa", // Algemeen directeur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/11f0af9e-016c-4e0b-983a-d8bc73804abc", // Adjunct-algemeen directeur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/62644b9c-4514-41dd-a660-4c35257f2b35", // Financieel directeur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/ed40469e-3b6f-4f38-99ba-18912ee352b0", // Adjunct-financieel directeur
];

const ocmw = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/53c0d8cd-f3a2-411d-bece-4bd83ae2bbc9", // Voorzitter van het Bijzonder Comité voor de Sociale Dienst
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000007", // Raad voor Maatschappelijk Welzijn
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000008", // Vast Bureau
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000009", // Bijzonder Comité voor de Sociale Dienst
];

const provincie = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e00000c", // Provincieraad
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/180a2fba-6ca9-4766-9b94-82006bb9c709", // Gouverneur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e00000d", // Deputatie
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab19107-82d2-4273-a986-3da86fda050d", // Griffier
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/3e9f22c1-0d35-445b-8a37-494addedf2d8", // Financieel beheerder
];

const district = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e00000a", // Districtsraad
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/9314533e-891f-4d84-a492-0338af104065", // Districtsburgemeester
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e00000b", // Districtscollege
];

const agb = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/0dbc70ec-6be9-4997-b8e1-11b6c0542382", // Bevoegd beslissingsorgaan
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
];

const apb = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/0dbc70ec-6be9-4997-b8e1-11b6c0542382", // Bevoegd beslissingsorgaan
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
];

const dienstverlenendeVereniging = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5733254e-73ff-4844-8d43-7afb7ec726e8", // Directiecomité
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/17e76b36-64a1-4db1-8927-def3064b4bf1", // Regionaal bestuurscomité
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
];

const opdrachthoudendeVereniging = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5733254e-73ff-4844-8d43-7afb7ec726e8", // Directiecomité
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/17e76b36-64a1-4db1-8927-def3064b4bf1", // Regionaal bestuurscomité
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
];

const opdrachthoudendeVerenigingMetPrivateDeelname = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5733254e-73ff-4844-8d43-7afb7ec726e8", // Directiecomité
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/17e76b36-64a1-4db1-8927-def3064b4bf1", // Regionaal bestuurscomité
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
];

const projectvereniging = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5733254e-73ff-4844-8d43-7afb7ec726e8", // Directiecomité
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/17e76b36-64a1-4db1-8927-def3064b4bf1", // Regionaal bestuurscomité
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
];

const hulpverleningszone = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/a9e30e31-0cd2-4f4a-9352-545c5d43be83", // Zoneraad
];

const politiezone = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/1afce932-53c1-46d8-8aab-90dcc331e67d", // Politieraad
];

// Note: the OCMW verenigingen classification is not used in OP, only it's sub
// classifications
// const ocmwVereniging = [
//   "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
//   "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
//   "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
// ];

const welzijnsvereniging = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
];

const autonomeVerzorgingsinstelling = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
];

const ziekenhuisvereniging = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
];

const vereniging_of_vennootschap_voor_sociale_dienstverlening = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
];

const woonzorgvereniging_of_woonzorgvennootschap = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
];

const peva_municipality = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
];

const peva_province = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/013cc838-173a-4657-b1ae-b00c048df943", // Raad van bestuur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b52094ff-21a2-4da8-8dbe-f513365d1528", // Algemene vergadering
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4", // Leidend Ambtenaar
];

const vgc = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/7148e12a-ae03-4a7b-bb16-7b6269b84175", // College
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/ff20fa3e-806b-4160-b74b-7483fe3a6ecd", // Collegelid
];

const roomsKatholiekEB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/04f65457bf125b2dc59fd71917ac3d08",
]; // Kerkraad
const protestantEB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/90a9ec83cb93b9369bba7ff29d9ce5ce",
]; // Bestuursraad
const orthodoxEB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/af811edba97c6ec34874d0830cbb1183",
]; // Kerkfabriekraad
const islamitischEB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b475fa47e17a8a05ae04a9e1fb9c9258",
]; // Comité
const anglicaansEB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/04f65457bf125b2dc59fd71917ac3d08",
]; // Kerkraad
const israelitischEB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/90a9ec83cb93b9369bba7ff29d9ce5ce",
]; // Bestuursraad
const nietConfessioneelEB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/90a9ec83cb93b9369bba7ff29d9ce5ce",
]; // Bestuursraad
const boeddistischEB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/90a9ec83cb93b9369bba7ff29d9ce5ce",
]; // Bestuursraad

const worshipService = {
  "http://lblod.data.gift/concepts/b13d1d623626bc1ee75c7d20bc60e3c0":
    roomsKatholiekEB,
  "http://lblod.data.gift/concepts/e8cba1540b35a32e9cb45126c38c03c6":
    protestantEB,
  "http://lblod.data.gift/concepts/84bcd6896f575bae4857ff8d2764bed8":
    orthodoxEB,
  "http://lblod.data.gift/concepts/9d8bd472a00bf0a5c7b7186606365a52":
    islamitischEB,
  "http://lblod.data.gift/concepts/99536dd6eb0d2ef38a89efafb17e7389":
    anglicaansEB,
  "http://lblod.data.gift/concepts/1a1abeafc973d27cebcb2d7a15b2d823":
    israelitischEB,
  "http://lblod.data.gift/concepts/cbd4c767ea184b41bf51b65d406754d4":
    nietConfessioneelEB,
  "http://lblod.data.gift/concepts/f076c85e72814278814776b038ac33f7":
    boeddistischEB,
};

const roomsKatholiekCB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/0d985699479162198b889f10e4f1a8ce",
]; // Centraal kerkbestuur
const protestantCB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/0d985699479162198b889f10e4f1a8ce",
]; // Centraal kerkbestuur
const orthodoxCB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/0d985699479162198b889f10e4f1a8ce",
]; // Centraal kerkbestuur
const islamitischCB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/4393389e99127b68e7fc11936ba92e18",
]; // Centraal bestuur
const anglicaansCB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/0d985699479162198b889f10e4f1a8ce",
]; // Centraal kerkbestuur
const israelitischCB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/4393389e99127b68e7fc11936ba92e18",
]; // Centraal bestuur
const nietConfessioneelCB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/4393389e99127b68e7fc11936ba92e18",
]; // Centraal bestuur
const boeddistischCB = [
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/4393389e99127b68e7fc11936ba92e18",
]; // Centraal bestuur

const centralWorshipService = {
  "http://lblod.data.gift/concepts/b13d1d623626bc1ee75c7d20bc60e3c0":
    roomsKatholiekCB,
  "http://lblod.data.gift/concepts/e8cba1540b35a32e9cb45126c38c03c6":
    protestantCB,
  "http://lblod.data.gift/concepts/84bcd6896f575bae4857ff8d2764bed8":
    orthodoxCB,
  "http://lblod.data.gift/concepts/9d8bd472a00bf0a5c7b7186606365a52":
    islamitischCB,
  "http://lblod.data.gift/concepts/99536dd6eb0d2ef38a89efafb17e7389":
    anglicaansCB,
  "http://lblod.data.gift/concepts/1a1abeafc973d27cebcb2d7a15b2d823":
    israelitischCB,
  "http://lblod.data.gift/concepts/cbd4c767ea184b41bf51b65d406754d4":
    nietConfessioneelCB,
  "http://lblod.data.gift/concepts/f076c85e72814278814776b038ac33f7":
    boeddistischCB,
};

export const GOVERNING_BODY_CLASSIFICATIONS = {
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/5ab0e9b8a3b2ca7c5e000000":
    provincie,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/5ab0e9b8a3b2ca7c5e000003":
    district,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/5ab0e9b8a3b2ca7c5e000001":
    gemeente,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/5ab0e9b8a3b2ca7c5e000002":
    ocmw,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/36a82ba0-7ff1-4697-a9dd-2e94df73b721":
    agb,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/80310756-ce0a-4a1b-9b8e-7c01b6cc7a2d":
    apb,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/d01bb1f6-2439-4e33-9c25-1fc295de2e71":
    dienstverlenendeVereniging,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/cd93f147-3ece-4308-acab-5c5ada3ec63d":
    opdrachthoudendeVereniging,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/4b8450cf-a326-4c66-9e63-b4ec10acc7f6":
    opdrachthoudendeVerenigingMetPrivateDeelname,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/b156b67f-c5f4-4584-9b30-4c090be02fdc":
    projectvereniging,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/ea446861-2c51-45fa-afd3-4e4a37b71562":
    hulpverleningszone,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/a3922c6d-425b-474f-9a02-ffb71a436bfc":
    politiezone,
  // Note: the OCMW verenigingen classification is not used in OP, only it's sub
  // classifications
  // "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/cc4e2d67-603b-4784-9b61-e50bac1ec089":
  //   ocmwVereniging,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/e8294b73-87c9-4fa2-9441-1937350763c9":
    welzijnsvereniging,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/34b5af85-dc9f-468f-9e03-ef89b174c267":
    autonomeVerzorgingsinstelling,
  "http://data.vlaanderen.be/id/concept/GeregistreerdeOrganisatieClassificatieCode/82250452-83a0-48f4-89cc-b430320493ce":
    ziekenhuisvereniging,
  "http://data.vlaanderen.be/id/concept/GeregistreerdeOrganisatieClassificatieCode/35833ba2-7371-400b-8df2-2912f66fb153":
    vereniging_of_vennootschap_voor_sociale_dienstverlening,
  "http://data.vlaanderen.be/id/concept/GeregistreerdeOrganisatieClassificatieCode/82fd21dc-e8bb-4d13-a010-f4a12358ef10":
    woonzorgvereniging_of_woonzorgvennootschap,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/2ad46df5-5c79-4d67-84d5-604c1377231e":
    peva_municipality,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/088784b6-e188-48bf-b94f-94665f9e1f53":
    peva_province,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/d90c511e-f827-488c-84ba-432c8f69561c":
    vgc,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/66ec74fd-8cfc-4e16-99c6-350b35012e86":
    worshipService,
  "http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/f9cac08a-13c1-49da-9bcb-f650b0604054":
    centralWorshipService,
};

export const MANDATE_CLASSIFICATIONS = {
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/4955bd72cd0e4eb895fdbfab08da0284":
    [
      // Burgemeester
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000013", // Burgemeester
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/7b038cc40bba10bec833ecfe6f15bc7a", // Aangewezen burgemeester
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000006":
    [
      // College van Burgemeester en Schepenen
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000013", // Burgemeester
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/7b038cc40bba10bec833ecfe6f15bc7a", // Aangewezen burgemeester
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000014", // Schepen
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/59a90e03-4f22-4bb9-8c91-132618db4b38", // Toegevoegde schepen
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000005":
    [
      // Gemeenteraad
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000012", // Voorzitter van de gemeenteraad
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000011", // Gemeenteraadslid
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/53c0d8cd-f3a2-411d-bece-4bd83ae2bbc9":
    [
      // Voorzitter van het Bijzonder Comité voor de Sociale Dienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e00001a", // Voorzitter van het Bijzonder Comité voor de Sociale Dienst
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000008":
    [
      // Vast Bureau
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000018", // Voorzitter van het Vast bureau
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000017", // Lid van het Vast Bureau
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000009":
    [
      // Bijzonder Comité voor de Sociale Dienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e00001a", // Voorzitter van het Bijzonder Comité voor de Sociale Dienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000019", // Lid van het Bijzonder Comité voor de Sociale Dienst
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e000007":
    [
      // Raad voor Maatschappelijk Welzijn
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000016", // Voorzitter van de Raad voor Maatschappelijk Welzijn
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000015", // Lid van de Raad voor Maatschappelijk Welzijn
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/9314533e-891f-4d84-a492-0338af104065":
    [
      // Districtsburgemeester
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e00001d", // Districtsburgemeester
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e00000b":
    [
      // Districtscollege
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e00001d", // Districtsburgemeester
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e00001e", // Districtsschepen
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e00000a":
    [
      // Districtsraad
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e00001c", // Voorzitter van de districtsraad
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e00001b", // Districtsraadslid
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e00000d":
    [
      // Deputatie
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000020", // Gedeputeerde
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/180a2fba-6ca9-4766-9b94-82006bb9c709":
    [
      // Gouverneur
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/d7c00cd1-baf1-4346-83c0-6796c0bedd85", // Gouverneur
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab0e9b8a3b2ca7c5e00000c":
    [
      // Provincieraad
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e000027", // Voorzitter van de provincieraad
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ab0e9b8a3b2ca7c5e00001f", // Provincieraadslid
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/af811edba97c6ec34874d0830cbb1183":
    [
      // Kerkfabriekraad
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5972fccd87f864c4ec06bfbd20b5008b", // Bestuurslid (van rechtswege) van het bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/2962f0bd-2836-4758-9866-8ce8ea2c536f", // Bestuurslid van het bestuur van de eredienst (Kleine Helft)
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/a8b5509b-f86b-48f8-94d6-fe463a9b77e3", // Bestuurslid van het bestuur van de eredienst (Grote Helft)
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ac134b9800b81da3c450d6b9605cef2", // Secretaris van het bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/180d13930d6f1a3938e0aa7fa9990002", // Penningmeester van het bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/67e6e585166cd97575b3e17ffc430a43", // Voorzitter van het bestuur van de eredienst
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/b475fa47e17a8a05ae04a9e1fb9c9258":
    [
      // Comité
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5972fccd87f864c4ec06bfbd20b5008b", // Bestuurslid (van rechtswege) van het bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/2962f0bd-2836-4758-9866-8ce8ea2c536f", // Bestuurslid van het bestuur van de eredienst (Kleine Helft)
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/a8b5509b-f86b-48f8-94d6-fe463a9b77e3", // Bestuurslid van het bestuur van de eredienst (Grote Helft)
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ac134b9800b81da3c450d6b9605cef2", // Secretaris van het bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/180d13930d6f1a3938e0aa7fa9990002", // Penningmeester van het bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/67e6e585166cd97575b3e17ffc430a43", // Voorzitter van het bestuur van de eredienst
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/04f65457bf125b2dc59fd71917ac3d08":
    [
      // Kerkraad
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5972fccd87f864c4ec06bfbd20b5008b", // Bestuurslid (van rechtswege) van het bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/2962f0bd-2836-4758-9866-8ce8ea2c536f", // Bestuurslid van het bestuur van de eredienst (Kleine Helft)
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/a8b5509b-f86b-48f8-94d6-fe463a9b77e3", // Bestuurslid van het bestuur van de eredienst (Grote Helft)
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ac134b9800b81da3c450d6b9605cef2", // Secretaris van het bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/180d13930d6f1a3938e0aa7fa9990002", // Penningmeester van het bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/67e6e585166cd97575b3e17ffc430a43", // Voorzitter van het bestuur van de eredienst
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/90a9ec83cb93b9369bba7ff29d9ce5ce":
    [
      // Bestuursraad
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5972fccd87f864c4ec06bfbd20b5008b", // Bestuurslid (van rechtswege) van het bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/2962f0bd-2836-4758-9866-8ce8ea2c536f", // Bestuurslid van het bestuur van de eredienst (Kleine Helft)
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/a8b5509b-f86b-48f8-94d6-fe463a9b77e3", // Bestuurslid van het bestuur van de eredienst (Grote Helft)
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5ac134b9800b81da3c450d6b9605cef2", // Secretaris van het bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/180d13930d6f1a3938e0aa7fa9990002", // Penningmeester van het bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/67e6e585166cd97575b3e17ffc430a43", // Voorzitter van het bestuur van de eredienst
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/0d985699479162198b889f10e4f1a8ce":
    [
      // Centraal kerkbestuur
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/6e26e94ea4b127eeb850fb6debe07271", // Vertegenwoordiger aangesteld door het representatief orgaan van het centraal bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/8c91c321ad477c4fc372ee36358d3ed4", // Expert van het centraal bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/e2af0ea1a6af96cfb698ac39ad985eea", // Secretaris van het centraal bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5960262f753661cf84329f3afa9f7df7", // Voorzitter van het centraal bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/f848fa3cc2c5fb7c581a116866293925", // Bestuurslid van het centraal bestuur van de eredienst
    ],
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/4393389e99127b68e7fc11936ba92e18":
    [
      // Centraal bestuur
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/6e26e94ea4b127eeb850fb6debe07271", // Vertegenwoordiger aangesteld door het representatief orgaan van het centraal bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/8c91c321ad477c4fc372ee36358d3ed4", // Expert van het centraal bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/e2af0ea1a6af96cfb698ac39ad985eea", // Secretaris van het centraal bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/5960262f753661cf84329f3afa9f7df7", // Voorzitter van het centraal bestuur van de eredienst
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/f848fa3cc2c5fb7c581a116866293925", // Bestuurslid van het centraal bestuur van de eredienst
    ],
};

export const PREFIXES = `
    PREFIX mu: <http://mu.semte.ch/vocabularies/core/>
    PREFIX org: <http://www.w3.org/ns/org#>
    PREFIX ere: <http://data.lblod.info/vocabularies/erediensten/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX besluit: <http://data.vlaanderen.be/ns/besluit#>
    PREFIX mandaat: <http://data.vlaanderen.be/ns/mandaat#>
    PREFIX generiek: <https://data.vlaanderen.be/ns/generiek#>
    PREFIX lblodlg: <http://data.lblod.info/vocabularies/leidinggevenden/>
`;

export const BESTUURSFUNCTIE_CLASSIFICATIONS = {
  // Algemeen directeur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/39854196-f214-4688-87a1-d6ad12baa2fa":
    [
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/39e08271-68db-4282-897f-5cba88c71862",
    ], // Algemeen directeur
  // Adjunct algemeen directeur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/11f0af9e-016c-4e0b-983a-d8bc73804abc":
    [
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/f7b4e17b-6f4e-48e7-a558-bce61669f59a",
    ], // Adjunct algemeen directeur
  // Financieel directeur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/62644b9c-4514-41dd-a660-4c35257f2b35":
    [
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/6d4cf4dd-2080-4752-8733-d02a036b2df0",
    ], // Financieel directeur
  // Adjunct financieel directeur
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/ed40469e-3b6f-4f38-99ba-18912ee352b0":
    [
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/3200ffc1-bb72-4235-a81c-64aa578b0789",
    ], // Adjunct financieel directeur
  // Griffier
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/5ab19107-82d2-4273-a986-3da86fda050d":
    [
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/63195ec6-02cb-4f86-ac8e-29c5183a11dc",
    ], // Griffier
  // Financieel beheerder
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/3e9f22c1-0d35-445b-8a37-494addedf2d8":
    [
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/b213c870-c762-4e39-9f78-3abdeda4b64a",
    ], // Financieel beheerder
  // Leidend ambtenaar
  "http://data.vlaanderen.be/id/concept/BestuursorgaanClassificatieCode/41caf7e6-b040-4720-9cc2-a96cfffed5b4":
    [
      "http://data.vlaanderen.be/id/concept/BestuursfunctieCode/855489b9-b584-4f34-90b2-39aea808cd9f",
    ], //Leidend ambtenaar
};

export const MINISTER_CLASSIFICATIONS = {
  "http://lblod.data.gift/concepts/84bcd6896f575bae4857ff8d2764bed8": [
    // Orthodox
    "http://lblod.data.gift/concepts/f274cb5a-ba44-4931-a1a8-38ec34513215", // Diaken
    "http://lblod.data.gift/concepts/efbf2ff50b5c4f693f129ac03319c4f2", // Priester
    "http://lblod.data.gift/concepts/04d3b5325f2ebc5eaf96849519af4254", // Rector
  ],
  "http://lblod.data.gift/concepts/9d8bd472a00bf0a5c7b7186606365a52": [
    // Islamitisch
    "http://lblod.data.gift/concepts/e357bc8f4cc3a694fde2239748768a22", // Eerste Imam in rang
    "http://lblod.data.gift/concepts/c4a3fd586211b17b06f574885e23f355", // Tweede Imam in rang
    "http://lblod.data.gift/concepts/5ebb798bd59c3b48c25116032caa02b7", // Derde Imam in rang
    "http://lblod.data.gift/concepts/7d8e0c15-7726-4196-9416-6dc40ed858bb", // Waarnemende Imam
  ],
  "http://lblod.data.gift/concepts/b13d1d623626bc1ee75c7d20bc60e3c0": [
    // Rooms-Katholiek
    "http://lblod.data.gift/concepts/ea58c73d9b4fc8a24a4b3eaa73a33995", // Coördinator
    "http://lblod.data.gift/concepts/59837b12c14f215a4efadae950be0072", // Medepastoor
    "http://lblod.data.gift/concepts/84b3a2321d1b69b6de782bb04e1a6862", // Aangesteld priester
    "http://lblod.data.gift/concepts/5c7fefe1b921dfd4c550924bb7a9331d", // Pastoor
  ],
  "http://lblod.data.gift/concepts/1a1abeafc973d27cebcb2d7a15b2d823": [
    // Israëlitisch
    "http://lblod.data.gift/concepts/17e7177aba2596705ad3c209019c729a", // Officiërend bedienaar
    "http://lblod.data.gift/concepts/27b3d149dd2a726effe749572177682e", // Rabbijn
  ],
  "http://lblod.data.gift/concepts/99536dd6eb0d2ef38a89efafb17e7389": [
    // Anglicaans
    "http://lblod.data.gift/concepts/fa4191f9d7050fe62ec3fc0e16541711", // Kapelaan
  ],
  "http://lblod.data.gift/concepts/e8cba1540b35a32e9cb45126c38c03c6": [
    // Protestants
    "http://lblod.data.gift/concepts/83d50e9184ae4a628851370079d162f6", // Predikant
  ],
  "http://lblod.data.gift/concepts/cbd4c767ea184b41bf51b65d406754d4": [
    //Niet-confessioneel
    "http://lblod.data.gift/concepts/ea58c73d9b4fc8a24a4b3eaa73a33995", // Coördinator
    "http://lblod.data.gift/concepts/17e7177aba2596705ad3c209019c729a", // Officiërend bedienaar
  ],
  "http://lblod.data.gift/concepts/f076c85e72814278814776b038ac33f7": [
    //Boeddistisch
    "http://lblod.data.gift/concepts/efbf2ff50b5c4f693f129ac03319c4f2", // Priester
  ],
 
};
