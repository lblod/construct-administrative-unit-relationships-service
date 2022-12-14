import {
  sparqlEscapeString,
  sparqlEscapeUri,
  sparqlEscapeDateTime,
  query,
  update, 
  uuid
} from "mu";
import { PREFIXES, GRAPH } from './config'

export async function getAdministrativeUnitDetails(administrativeUnitdUuid) {
  const result = await query(`
    ${PREFIXES}

    SELECT DISTINCT ?administrativeUnit ?classification ?religionType WHERE {
      GRAPH ${sparqlEscapeUri(GRAPH)} {
        ?administrativeUnit mu:uuid ${sparqlEscapeString(administrativeUnitdUuid)} ;
          org:classification ?classification .

        OPTIONAL { ?administrativeUnit ere:typeEredienst ?religionType . }
      }
    }
    LIMIT 1
  `);

  if (result.results.bindings.length) {
    return {
      uri: result.results.bindings[0].administrativeUnit.value,
      uuid: administrativeUnitdUuid,
      classification: result.results.bindings[0].classification.value,
      religionType: result.results.bindings[0].religionType ? result.results.bindings[0].religionType.value : null
    } 
  } else {
    console.log(`Details not found for administrative unit with uuid ${administrativeUnitdUuid}.`);
    return null;
  }
}

export async function createGoverningBody(administrativeUnit, classification) {
  const id = uuid();
  const uri = `http://data.lblod.info/id/bestuursorganen/${id}`;

  await update(`
    ${PREFIXES}

    INSERT {
      GRAPH ${sparqlEscapeUri(GRAPH)} {
        ${sparqlEscapeUri(uri)} a besluit:Bestuursorgaan ;
          mu:uuid ${sparqlEscapeString(id)} ;
          skos:prefLabel ?governingBodyLabel ;
          besluit:bestuurt ${sparqlEscapeUri(administrativeUnit.uri)} ;
          org:classification ${sparqlEscapeUri(classification)} .
      }
    } WHERE {
      GRAPH ${sparqlEscapeUri(GRAPH)} {
        ?administrativeUnit mu:uuid ${sparqlEscapeString(administrativeUnit.uuid)} ;
          skos:prefLabel ?administrativeUnitLabel .

        ${sparqlEscapeUri(classification)} skos:prefLabel ?classificationLabel .
      }
      BIND(CONCAT(?classificationLabel, " ", ?administrativeUnitLabel) as ?governingBodyLabel)
    }
  `);

  return uri;
}

export async function createGoverningBodyInTime(governingBody, startDate, endDate) {
  const id = uuid();
  const uri = `http://data.lblod.info/id/bestuursorganen/${id}`;

  const endDateTriple = endDate ? `${sparqlEscapeUri(uri)} mandaat:bindingEinde ${sparqlEscapeDateTime(endDate)} ;` : '';

  await update(`
    ${PREFIXES}

    INSERT DATA {
      GRAPH ${sparqlEscapeUri(GRAPH)} {
        ${sparqlEscapeUri(uri)} a besluit:Bestuursorgaan ;
          mu:uuid ${sparqlEscapeString(id)} ;
          generiek:isTijdspecialisatieVan ${sparqlEscapeUri(governingBody)} ;
          mandaat:bindingStart ${sparqlEscapeDateTime(startDate)} .

        ${endDateTriple}
      }
    }
  `);

  return uri;
}

export async function createMandate(classification, governingBodiesInTime) {
  const id = uuid();
  const uri = `http://data.lblod.info/id/mandaten/${id}`;

  const linksToGoverningBodies = governingBodiesInTime.map(governingBodyInTime => {
    return `${sparqlEscapeUri(governingBodyInTime)} org:hasPost ${sparqlEscapeUri(uri)} .\n`
  }).join('');

  await update(`
    ${PREFIXES}

    INSERT DATA {
      GRAPH ${sparqlEscapeUri(GRAPH)} {
        ${linksToGoverningBodies}

        ${sparqlEscapeUri(uri)} a mandaat:Mandaat ;
          mu:uuid ${sparqlEscapeString(id)} ;
          org:role ${sparqlEscapeUri(classification)} .
      }
    }
  `);

  return uri;
}

export async function createBestuursfunctie(classification, governingBodyInTime) {
  const id = uuid();
  const uri = `http://data.lblod.info/id/bestuursfuncties/${id}`;

  await update(`
    ${PREFIXES}

    INSERT DATA {
      GRAPH ${sparqlEscapeUri(GRAPH)} {
        ${sparqlEscapeUri(governingBodyInTime)} lblodlg:heeftBestuursfunctie ${sparqlEscapeUri(uri)} .

        ${sparqlEscapeUri(uri)} a lblodlg:Bestuursfunctie ;
          mu:uuid ${sparqlEscapeString(id)} ;
          org:role ${sparqlEscapeUri(classification)} .
      }
    }
  `);

  return uri;
}

export async function createMinister(classification, administrativeUnit) {
  const id = uuid();
  const uri = `http://data.lblod.info/id/positiesBedienaar/${id}`;

  await update(`
    ${PREFIXES}

    INSERT DATA {
      GRAPH ${sparqlEscapeUri(GRAPH)} {
        ${sparqlEscapeUri(administrativeUnit)} ere:wordtBediendDoor ${sparqlEscapeUri(uri)} .

        ${sparqlEscapeUri(uri)} a org:Post, ere:PositieBedienaar ;
          mu:uuid ${sparqlEscapeString(id)} ;
          ere:functie ${sparqlEscapeUri(classification)} .
      }
    }
  `);

  return uri;
}
