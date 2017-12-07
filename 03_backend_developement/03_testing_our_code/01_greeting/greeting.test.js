const greeting = require("./greeting");


test("name to be passed to the function greet", () => {
  const result = greeting.greet("francois");
  expect(result).toBe("Hello FRANCOIS!");

});

test("no name to be passed to the function greet", () => {
  const world = greeting.greet();
  expect(world).toBe("Hello WORLD!");
});
