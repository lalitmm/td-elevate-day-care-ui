import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const providers = [
      {
        "LOC_ID": "1013",
        "LOC_NAME": "Lakeshore Community Child Care Centre",
        "TOTSPACE": "151",
      }, {
        "LOC_ID": "1014",
        "LOC_NAME": "Alternative Primary School Parent Group",
        "TOTSPACE": "83",
      }, {
        "LOC_ID": "1015",
        "LOC_NAME": "Cardinal Leger Child Care Centre (Scarborough)",
        "TOTSPACE": "102",
      }, 
    ];
    return {providers};
  }
}
