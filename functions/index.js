require("dotenv").config();
const express = require("express");
const app = express();
const { quotes } = require("../data/quotes");
const {users} = require("../data/users")
const {comments} = require("../data/comments")
const {posts} = require("../data/posts")
const {GirlImages} = require("../data/images")
const{products} = require("../data/products")
const router = express.Router();


app.use(express.json());

//test
router.get("/test" , (req,res)=>{
  res.send("Api store test version");
})

//quotes
router.get("/api/quotes", (req, res) => {
  res.send(quotes.map((x) => x));
});
router.get("/api/quotes/:id", (req, res) => {
  const quote = quotes.find((q) => q.id === parseInt(req.params.id));
  if (!quote) return res.status(404).send("Quote not found.");
  res.json(quote);
});
router.get("/api/randomquotes", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

//users
router.get("/api/users", (req, res) => {
  res.send(users.map((x) => x));
});
router.get("/api/users/:id", (req, res) => {
  const userdetail = users.find((q) => q.id === parseInt(req.params.id));
  if (!userdetail) return res.status(404).send("Quote not found.");
  res.json(userdetail);
});
router.get("/api/randomusers", (req, res) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  res.json(users[randomIndex]);
});

//comments
router.get("/api/comments", (req, res) => {
  res.send(comments.map((x) => x));
});
router.get("/api/comments/:id", (req, res) => {
  const userdetail = comments.find((q) => q.id === parseInt(req.params.id));
  if (!userdetail) return res.status(404).send("Quote not found.");
  res.json(userdetail);
});
router.get("/api/randomcomments", (req, res) => {
  const randomIndex = Math.floor(Math.random() * comments.length);
  res.json(comments[randomIndex]);
});

//posts
router.get("/api/posts", (req, res) => {
  res.send(posts.map((x) => x));
});
router.get("/api/posts/:id", (req, res) => {
  const userdetail = posts.find((q) => q.id === parseInt(req.params.id));
  if (!userdetail) return res.status(404).send("Quote not found.");
  res.json(userdetail);
});
router.get("/api/randomposts", (req, res) => {
  const randomIndex = Math.floor(Math.random() * comments.length);
  res.json(posts[randomIndex]);
});

//images
router.get("/api/images", (req, res) => {
  res.send(GirlImages.map((x) => x));
});
router.get("/api/images/:id", (req, res) => {
  const userdetail = posts.find((q) => q.id === parseInt(req.params.id));
  if (!userdetail) return res.status(404).send("Quote not found.");
  res.json(userdetail);
});
router.get("/api/randomimages", (req, res) => {
  const randomIndex = Math.floor(Math.random() * comments.length);
  res.json(GirlImages[randomIndex]);
});

//products
router.get("/api/products", (req, res) => {
  res.send(products.map((x) => x));
});
router.get("/api/products/:id", (req, res) => {
  const userdetail = products.find((q) => q.id === parseInt(req.params.id));
  if (!userdetail) return res.status(404).send("Quote not found.");
  res.json(userdetail);
});
router.get("/api/randomproducts", (req, res) => {
  const randomIndex = Math.floor(Math.random() * comments.length);
  res.json(products[randomIndex]);
});

app.use("/.netlify/functions/" , router);
module.exports.handler = serverless(app)
