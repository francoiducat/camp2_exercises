import Wapiti from "wapiti";

test("should display a counter starting at 0", () => {
  expect.assertions(1);

  return Wapiti.goto("http://localhost:3000")
    .capture(() => document.querySelector("span").textContent)
    .run()
    .then(result => {
      expect(result).toBe("0");
    });
});

test("should go down when clicking on the first button", () => {
  expect.assertions(1);
  return Wapiti.goto("http://localhost:3000")
    .click("button")
    .capture(() => document.querySelector("span").textContent)
    .click("button")
    .capture(() => document.querySelector("span").textContent)
    .run()
    .then(result => {
      expect(result).toEqual(["-1", "-2"]);
    });
});
