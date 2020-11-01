import * as Express from "express";
import mongodbClient from "../../dbClient";
import { IDocumentUser } from "../documents/IDocumentUser";
import noImpl from "../../noImpl";
const router = Express.Router();

router.post("/signup", noImpl);
router.put("/:user", noImpl);
router.delete("/:user", noImpl);

router.get("/:user", (req, res, next) => {
    const uid = req.params.user;
    mongodbClient((ce, client, db) => {
        if (ce) {
            client.close();
            res.status(500);
            res.json({
                message: ce.message,
                requestPath: req.path,
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
                    requestPath: req.path,
                });
                return next(e);
            }

            client.close();

            if (result === null) {
                res.status(404).json({
                    message: "Not Found.",
                });
            }
            res.json(result);
        });
    });
});


export default router;
