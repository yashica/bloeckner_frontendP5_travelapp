const updateUI = require("./updateUI");

test("updateUI is defined", async () => {
  expect(updateUI).toBeDefined();
});
test("updateUI is a function", async () => {
  expect(typeof updateUI).toBe("function");
});
