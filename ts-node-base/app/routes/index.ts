const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
import { TestService } from '../services/TestService'
const app = express();
app.use(helmet());
app.use(cors());
// ルーティングする
const router = express.Router();

// routerにルーティングの動作を記述する
router.get('/helloWorld', (req: any, res: any) => {
    res.status(200).send({ message: 'Hello, world!!'});
});
router.get('/test', (req: any, res: any, next: any) => {
    const service = new TestService();
    service.test()
    .then((result: any) => res.status(200).send(result))
    .catch(next);
});
const TestMongoService = require('./models/');
router.get('/test/mongo/:user', (req: any, res: any, next: any) => {
    const { user } = req.params;
    const service = new TestMongoService;

    service
        .run(user)
        .then((result: any) => res.status(200).send(result))
        .catch(next);
});

// いずれのルーティングにもマッチしない場合の動作を記述する
app.use((req: any, res: any) => {
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
