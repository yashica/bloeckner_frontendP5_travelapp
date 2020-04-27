const getCoordinates = require("./getChoords");

test("It should return an object", async () => {
  expect(typeof getCoordinates("London")).toBe("object");
});
