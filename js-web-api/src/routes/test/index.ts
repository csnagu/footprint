import express from "express";
import mongodbClient from "../../dbClient";

const router = express.Router();

router.get("/dbConnect", (req, res, next) => {
    mongodbClient((err, client) => {
        if (err) {
            res.status(500).json({
                msg: ":-("
            });
            return next(err);
        }
        res.json({
            msggg: ":-)"
        });
        client.close();
    });
});

export default router;
