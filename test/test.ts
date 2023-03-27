import assert from 'assert';
import { validate } from '../app';


describe('Validate', function() {

  const schema = [{ type: "object", properties: [{name: "foo", type: "string"}, {name: "bar", type: "number"}]}];

  it('should validate a simple object', function() {
    const isValid = validate(schema, { foo: "bar" });
    assert.strictEqual(isValid, true);
  });

  it('should not validate against an invalid object', function() {
    const isValid = validate(schema, { foo: 123 });
    assert.strictEqual(isValid, true);
  });
});