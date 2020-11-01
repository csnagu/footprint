import mongoDB from "mongodb";

const url = "mongodb://localhost:27017";
export const dbName = "js-web-api";

export default (callback: (err: mongoDB.MongoError, client: mongoDB.MongoClient, db: mongoDB.Db) => void) => {
    const client = mongoDB.MongoClient;
    client.connect(url, { useNewUrlParser: true }, (err, db) => {
        if (err) { throw err; }
        callback(err, db, db.db(dbName));
    });
};
