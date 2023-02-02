import Dexie from 'dexie';


export const db = new Dexie('job_application_db');
db.version(1).stores({
  items: 'id, applied, name, link, timeAdded', 
});