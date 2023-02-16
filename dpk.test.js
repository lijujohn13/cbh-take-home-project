const crypto = require("crypto")
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the value of partitionKey property if passed in the input object", () => {
    const event = { partitionKey: "secret" };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(event.partitionKey);
  });

  it("Returns the hash value of the input object if partitionKey is not passed in the input object", () => {
    const event = { key: 'secret'};
    const eventString = JSON.stringify(event);
    const hash = crypto.createHash("sha3-512").update(eventString).digest("hex");
    const trivialKey = deterministicPartitionKey(event);
    expect(hash).toEqual(trivialKey);
  });

  it("Return a hash value of length 128 if partitionKey is not passed", () => {
    const event = { key: ''};
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(128);
  });

  it("Return a hash value of length 128 if length of partitionKey property value is greater than 256 ", () => {
    const STRING_OF_LENGTH_257 = 'a'.repeat(257);
    const event = { partitionKey: STRING_OF_LENGTH_257 };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(128);
  });

  it("Always returns a stringified version of the partitionKey property value in theinput object", () => {
    const event = { partitionKey: { value: 123} };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(JSON.stringify(event.partitionKey));
  });
});
