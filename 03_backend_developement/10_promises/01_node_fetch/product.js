const fetch = require("node-fetch");

//efe288cb-fb63-4b23-b8df-529f04b8b02b

function getBrandTitle(product_id) {
  return fetch(`https://decath-product-api.herokuapp.com/products/${product_id}`)
    .then(response => response.json())
    .then(product => product.brand_id)
    .then(brand_id => fetch(`https://decath-product-api.herokuapp.com/brands/${brand_id}`)
      .then(response => response.json())
      .then(brand => brand.title)
    );
}

module.exports = {
  getBrandTitle:getBrandTitle
};
