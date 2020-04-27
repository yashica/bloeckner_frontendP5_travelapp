const getImage = require("./getImage");

test("getImage is defined", async () => {
  expect(getImage).toBeDefined();
});
test("getImage is a function", async () => {
  expect(typeof getImage).toBe("function");
});
test("getImage should return an object", async () => {
  expect(typeof getImage("Munich")).toBe("object");
});
