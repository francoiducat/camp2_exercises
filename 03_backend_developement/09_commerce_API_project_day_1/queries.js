const PG = require("pg");
const client = new PG.Client();
client.connect();

function selectProducts() {
  client.query(
    "SELECT * from products",
    function(error, resultSQL){
      if(error) {
        console.warn(error);
      } else {
        resultSQL.rows;
      }
    });
}
selectProducts();

module.exports = {
  selectProducts:selectProducts
};
