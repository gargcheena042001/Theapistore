require("dotenv").config();
const express = require("express");
const app = express();
const { quotes } = require("../data/quotes");
const {users} = require("../data/users")
const {comments} = require("../data/comments")
const {posts} = require("../data/posts")
const {GirlImages} = require("../data/images")
const{products} = require("../data/products")


app.use(express.json());

//test
app.get("/test" , (req,res)=>{
  res.send("Api store test version");
})

//quotes
app.get("/api/quotes", (req, res) => {
  res.send(quotes.map((x) => x));
});
app.get("/api/quotes/:id", (req, res) => {
  const quote = quotes.find((q) => q.id === parseInt(req.params.id));
  if (!quote) return res.status(404).send("Quote not found.");
  res.json(quote);
});
app.get("/api/randomquotes", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

//users
app.get("/api/users", (req, res) => {
  res.send(users.map((x) => x));
});
app.get("/api/users/:id", (req, res) => {
  const userdetail = users.find((q) => q.id === parseInt(req.params.id));
  if (!userdetail) return res.status(404).send("Quote not found.");
  res.json(userdetail);
});
app.get("/api/randomusers", (req, res) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  res.json(users[randomIndex]);
});

//comments
app.get("/api/comments", (req, res) => {
  res.send(comments.map((x) => x));
});
app.get("/api/comments/:id", (req, res) => {
  const userdetail = comments.find((q) => q.id === parseInt(req.params.id));
  if (!userdetail) return res.status(404).send("Quote not found.");
  res.json(userdetail);
});
app.get("/api/randomcomments", (req, res) => {
  const randomIndex = Math.floor(Math.random() * comments.length);
  res.json(comments[randomIndex]);
});

//posts
app.get("/api/posts", (req, res) => {
  res.send(posts.map((x) => x));
});
app.get("/api/posts/:id", (req, res) => {
  const userdetail = posts.find((q) => q.id === parseInt(req.params.id));
  if (!userdetail) return res.status(404).send("Quote not found.");
  res.json(userdetail);
});
app.get("/api/randomposts", (req, res) => {
  const randomIndex = Math.floor(Math.random() * comments.length);
  res.json(posts[randomIndex]);
});

//images
app.get("/api/images", (req, res) => {
  res.send(GirlImages.map((x) => x));
});
app.get("/api/images/:id", (req, res) => {
  const userdetail = posts.find((q) => q.id === parseInt(req.params.id));
  if (!userdetail) return res.status(404).send("Quote not found.");
  res.json(userdetail);
});
app.get("/api/randomimages", (req, res) => {
  const randomIndex = Math.floor(Math.random() * comments.length);
  res.json(GirlImages[randomIndex]);
});

//products
app.get("/api/products", (req, res) => {
  res.send(products.map((x) => x));
});
app.get("/api/products/:id", (req, res) => {
  const userdetail = products.find((q) => q.id === parseInt(req.params.id));
  if (!userdetail) return res.status(404).send("Quote not found.");
  res.json(userdetail);
});
app.get("/api/randomproducts", (req, res) => {
  const randomIndex = Math.floor(Math.random() * comments.length);
  res.json(products[randomIndex]);
});


app.listen(process.env.PORT);
