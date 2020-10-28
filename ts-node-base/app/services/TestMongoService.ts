// インタフェース
export interface ITest {
    user: string;
    email: string;
};

const TestMongoModel = require('../models/')
// クラス
export class TestMongoService {
    public async run(params: any): Promise<ITest> {
        const testAll = await TestMongoModel.find();
        return testAll;
    }
}
