import Datastore from 'nedb';
import path from 'path';
import * as os from 'os';

const dbPath = path.join(os.homedir(), '.fusetorrent');
const dbFile = path.join(dbPath, 'datastore');

const db = new Datastore({
    filename: dbFile,
    autoload: true
});

const dbFind = function (query = {}, cb: (arg0: any) => void) {
    return db.find(query, (err: any, items: any) => {
        if (err) console.log(err);
        cb(items);
    });
};

export { db, dbFind };
