const getWeather = require("./getWeather");

test("getWeather is defined", async () => {
  expect(getWeather).toBeDefined();
});
test("getWeather is a function", async () => {
  expect(typeof getWeather).toBe("function");
});
test("getWeather should return an object", async () => {
  expect(typeof getWeather(100, 100)).toBe("object");
});
