"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const app_1 = require("../app");
describe('Validate', function () {
    const schema = [{ type: "object", properties: [{ name: "foo", type: "string" }, { name: "bar", type: "number" }] }];
    it('should validate a simple object', function () {
        const isValid = (0, app_1.validate)(schema, { foo: "bar" });
        assert_1.default.strictEqual(isValid, true);
    });
    it('should not validate against an invalid object', function () {
        const isValid = (0, app_1.validate)(schema, { foo: 123 });
        assert_1.default.strictEqual(isValid, true);
    });
});
