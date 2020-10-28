"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const TestService_1 = require("../services/TestService");
const app = express();
app.use(helmet());
app.use(cors());
// ルーティングする
const router = express.Router();
// routerにルーティングの動作を記述する
router.get('/helloWorld', (req, res) => {
    res.status(200).send({ message: 'Hello, world!!' });
});
router.get('/test', (req, res, next) => {
    const service = new TestService_1.TestService();
    service.test()
        .then((result) => res.status(200).send(result))
        .catch(next);
});
const TestMongoService = require('./models/');
router.get('/test/mongo/:user', (req, res, next) => {
    const { user } = req.params;
    const service = new TestMongoService;
    service
        .run(user)
        .then((result) => res.status(200).send(result))
        .catch(next);
});
// いずれのルーティングにもマッチしない場合の動作を記述する
app.use((req, res) => {
    res.status(404);
    res.render('error', {
        param: {
            status: 404,
            message: 'not found'
        },
    });
});
// routerをモジュールとして扱う
module.exports = router;
//# sourceMappingURL=index.js.map