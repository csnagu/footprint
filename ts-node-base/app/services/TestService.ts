// インタフェース
export interface ITest {
    test: string;
};

// クラス
export class TestService {
    /**
     * async te: Promise<ITest>st
     * return {
     * test: 'test1'}
     */
    public async test(): Promise<ITest> {
        return {
            test: 'test1aa'
        }
    };
};
