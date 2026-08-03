import { SchemaTypeDefinition } from 'sanity';

// DOCUMENTS
import ratesType from './ratesType';
import tickerType from './tickerType';
import eventType from './eventType';
import membershipsType from './membershipsType';

// OBJECTS
import golfPass from './objects/golfPass';
import miscRates from './objects/miscRates';
import standardRates from './objects/standardRates';
import linkDetails from './objects/linkDetails';
import individualMembership from './objects/individualMembership';
import familyMembership from './objects/familyMembership';
import corporateMembership from './objects/corporateMembership';
import seniorIndividualMembership from './objects/seniorIndividualMembership';
import seniorCoupleMembership from './objects/seniorCoupleMembership';

export const schemaTypes: SchemaTypeDefinition[] = [
  // Documents
  ratesType,
  tickerType,
  eventType,
  membershipsType,
  // Objects
  golfPass,
  miscRates,
  standardRates,
  linkDetails,
  individualMembership,
  familyMembership,
  corporateMembership,
  seniorIndividualMembership,
  seniorCoupleMembership,
];
