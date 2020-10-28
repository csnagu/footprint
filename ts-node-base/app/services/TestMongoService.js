"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestMongoService = void 0;
;
const TestMongoModel = require('../models/');
// クラス
class TestMongoService {
    async run(params) {
        const testAll = await TestMongoModel.find();
        return testAll;
    }
}
exports.TestMongoService = TestMongoService;
//# sourceMappingURL=TestMongoService.js.map