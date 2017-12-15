const commerce = require("./commerce");

test("Fetch categories from API", done => {
  expect.assertions(1);
  commerce.fetchData("categories", function(categories) {
    expect(categories.length).toEqual(1002);
    done();
  });
});
