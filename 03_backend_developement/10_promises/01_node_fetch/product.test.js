const product = require("./product");


test("Brand title should be QUECHUA", (done) => {
  expect.assertions(1);
  return product.getBrandTitle("efe288cb-fb63-4b23-b8df-529f04b8b02b")
    .then(brand_id => {
      expect(brand_id).toEqual("QUECHUA");
      done();
    });
});

test("Should get an error", () => {
  expect.assertions(1);
  return product.getBrandTitle("efe288cb-fb63-4b23-b8/df-529f04b8b02b")
    .catch(error => {
      console.log("toto");
      expect(error).toBe(error);
    });
});
