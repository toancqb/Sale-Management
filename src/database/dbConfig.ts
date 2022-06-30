import {DBConfig} from "ngx-indexed-db";

export const dbConfig: DBConfig = {
  name: 'saleManagementDB',
  version: 1,
  objectStoresMeta: [{
    store: 'client',
    storeConfig: {keyPath: 'id', autoIncrement: true},
    storeSchema: [
      {name: 'first_name', keypath: 'first_name', options: { unique: false}},
      {name: 'last_name', keypath: 'last_name', options: { unique: false}},
      {name: 'telephoneNumber', keypath: 'telephoneNumber', options: { unique: false}},
      {name: 'email', keypath: 'email', options: { unique: false}},
      {name: 'address', keypath: 'address', options: { unique: false}},
    ]
  }]
};
