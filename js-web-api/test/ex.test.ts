import assert from "assert";
import { ex } from "../src/ex"

describe("ex module", () => {
    it("isTrue test", () => {
        assert(ex(true) === "isTrue")
    });
    it("isTrue test", () => {
        assert(ex(false) === "isFalse")
    });
});
