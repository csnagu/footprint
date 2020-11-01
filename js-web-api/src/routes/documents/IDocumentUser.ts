import * as MongoDB from "mongodb";

export interface IDocumentUser {
    _id: MongoDB.ObjectId;
    uid: string;
    name: string;
    password: string;
}
