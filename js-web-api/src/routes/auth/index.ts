import * as Express from "express";
import jwt from "jsonwebtoken";
import mongodbClient from "../../dbClient";
import { IDocumentUser } from "../documents/IDocumentUser";
import noImpl from "../../noImpl";

const router = Express.Router();

router.post("/signin", (req, res, next) => {
    const uid: string = req.body.uid;
    console.log(req.body);
    mongodbClient((ce, client, db) => {
        if (ce) {
            client.close();
            res.status(500);
            res.json({
                message: ce.message,
                requestPath: req.path
            });
            return next(ce);
        }

        const collection = db.collection<IDocumentUser>("users");
        collection.findOne({ uid }, (e, result) => {
            if (e) {
                client.close();
                res.status(500);
                res.json({
                    message: e.message,
                    requestPath: req.path
                });
                return next(e);
            }

            client.close();

            if (result === null || result.password !== req.body.password) {
                res.json({
                    signin: false,
                    message: "nothing uid or missing password"
                });
                return;
            } else {
                const payload = {
                    name: result.uid,
                };
                const token: string = jwt.sign(payload, "secretKey");
                res.json({
                    success: true,
                    token,
                });
            }
        });
    });
});

router.delete("/signout", noImpl);

export default router;
