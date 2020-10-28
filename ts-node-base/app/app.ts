const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
app.use(helmet());
app.use(cors());
const bodyParser = require('body-parser');

// body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// ルーティング
// const router = require('./routes/');
const router = require("./routes");
app.use('/', router)

app.listen(port);
console.log('listen on port ' + port);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const options = {
    userUnifiedTopology: true,
    useNewUrlParser: true
};
mongoose.connect('mongodb://localhost:27017/app1db', options);
mongoose.connection.on('error', (err: any) => {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
});
