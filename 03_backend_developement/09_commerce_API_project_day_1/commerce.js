const request = require("request");
const baseURL = "https://decath-product-api.herokuapp.com";
const PG = require("pg");
const client = new PG.Client();
client.connect();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const queries = require("./queries");
let compteur = 0;

app.get("/", function(request, result) {
  result.send("Hello World!");
});

// app.listen(port, function() {
// console.log("Server listening on port:" + port);
// });

// function sleep(seconds){
//   const waitUntil = new Date().getTime() + seconds*1000;
//   console.log(“wait:“, waitUntil);
//   while(new Date().getTime() < waitUntil) true;
// }

function getCategoryIds(callback){
  client.query(
    "SELECT id FROM categories", function(error,result){
      if(error) {
        console.warn(error);
      } else {
        result.rows.forEach( category => {
          callback(category.id);
        });
      }
    });
}

getCategoryIds(getProductsbyCategory);

function getProductsbyCategory(id){
  request({
    url : `${baseURL}/categories/${id}/products`,
    method  : "GET"
  }, function(error,response,result){
    if(error) {
      console.log(error);
    } else {

      JSON.parse(result).forEach(product => {
        compteur++;
        client.query(
          "INSERT INTO products_categories VALUES ($1::uuid,$2::uuid)",
          [id,product.id],
          function(error, resultSQL){
            if(error) {
              console.warn(error);
            } else {
              console.log(resultSQL);
            }
          });
      });
      console.log(compteur);
    }
  });

}

getProductsbyCategory();


function getProductsbyID(){
  app.get("/products/:id",function(request,result){
    client.query("SELECT * from products WHERE id = $1::uuid",
      [request.params.id],
      function(error, resultSQL){
        if(error){
          console.warn(error);
        } else {
          result.json(resultSQL.rows);
        }
      });
  });
}
getProductsbyID();

function getCategoriesbyID() {
  app.get("/categories/:id", function(request, result) {
    client.query(
      "SELECT * from categories where id = $1::uuid",
      [request.params.id],
      function(error, resultSQL) {
        if (error) {
          console.warn(error);
        } else {
          result.json(resultSQL.rows);
        }
      });
  });
}
getCategoriesbyID();

function getBrandsbyID() {
  app.get("/brands/:id",function(request,result){
    client.query("SELECT * from brands WHERE id = $1::uuid",
      [request.params.id],
      function(error,resultSQL){
        if(error){
          console.warn(error);
        } else {
          result.json(resultSQL.rows);
        }
      });
  });
}
getBrandsbyID();

// function getProducts() {
//   app.get("/products", function(error, result) {
//     result.json(queries.selectProducts);
//   });
// }
// getProducts();

function getProduits() {
  app.get("/produits", function(error, result) {
    selectProduits(result);
  });
}
function selectProduits(result) {
  client.query(
    "SELECT * from products",
    function(error, resultSQL) {
      if (error) {
        console.warn(error);
      } else {
        result.json(resultSQL.rows);
      }
    });
}
getProduits();
function getAllProducts(){
  app.get("/products",function(error,result){
    client.query(
      "SELECT * from products",
      function(error, resultSQL){
        if(error) {
          console.warn(error);
        } else {
          result.json(resultSQL.rows);
        }
      });
  });
}
getAllProducts();
function getAllCategories() {
  app.get("/categories", function(request, result) {
    client.query(
      "SELECT * from categories",
      function(error, resultSQL) {
        if (error) {
          console.warn(error);
        } else {
          result.json(resultSQL.rows);
        }
      });
  });
}
getAllCategories();
function getAllBrands() {
  app.get("/brands", function(request, result) {
    client.query(
      "SELECT * FROM brands",
      function(error, resultSQL) {
        if (error) {
          console.warn(error);
        } else {
          result.json(resultSQL.rows);
        }
      }
    );
  });
}
getAllBrands();

function fetchData(param, callback) {

  request({
    url: `${baseURL}/${param}`,
    method: "GET"
  }, function(error, response, result) {
    if (error) {
      console.log(error);
    } else {
      const json = JSON.parse(result);
      json.forEach(callback);
    }
  });
}

function insertCategories(category) {
  client.query(
    "INSERT INTO categories (id,decathlon_id,label) VALUES ($1::uuid,$2::integer,$3::text)", [category.id, category.decathlon_id, category.label],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        // do something with result
        console.log(result);
      }
    }
  );
}

function insertBrands(brand) {
  client.query(
    "INSERT INTO brands (id,title) VALUES ($1::uuid,$2::varchar(255))", [brand.id, brand.title],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        // do something with result
        console.log(result);
      }
    }
  );
}

function insertProducts(product) {
  client.query(
    "INSERT INTO products (id,decathlon_id,title,description,brand_id,min_price,max_price,crossed_price,percent_reduction,image_path,rating) VALUES ($1::uuid,$2::integer,$3::varchar(255),$4::varchar(255),$5::varchar(255),$6::float,$7::float,$8::float,$9::float,$10::text,$11::float)", [product.id, product.decathlon_id, product.title, product.description, product.brand_id, product.min_price, product.max_price, product.crossed_price, product.percent_reduction, product.image_path, product.rating],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else {
        // do something with result
        console.log(result);
      }
    }
  );
}

//fetchData("categories", insertCategories);
//fetchData("brands", insertBrands);
//fetchData("products", insertProducts);


module.exports = {
  fetchData: fetchData
};
