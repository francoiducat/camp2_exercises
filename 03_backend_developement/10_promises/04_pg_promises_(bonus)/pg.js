const PG = require("pg");
const client = new PG.Client();
client.connect();

client.query("SELECT * FROM products WHERE title = $1::text", ["PREDATOR BOWL FLOAT 5G"])
  .then((result) => result.rows)
  .then((product) => {
    console.log(product);
    console.log(product[0].title);
    client.end();
  })
  .catch((error) => {
    console.warn(error);
    client.end();
  });
