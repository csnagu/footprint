import Express from "express";
import bodyParser from "body-parser";
import log from "./log";
import auth from "./routes/auth/index";
import users from "./routes/users/index";
import test from "./routes/test/index";
import verifyToken from "./verifyToken";

log.init();

const app = Express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/auth", auth);
app.use("/users", verifyToken, users);
app.use("/test", verifyToken, test);
app.use((req, res) => {
    res.status(404);
    res.json({
        message: "API Not Found",
        requestPath: req.path,
    });
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
export default app;
