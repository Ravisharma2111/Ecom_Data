const express = require('express');
const app = express();
const PORT = 3000; // Replace with your desired port number

app.use(express.json());

// Mock database (replace this with your actual database implementation)
let wishlistItems = [];
let cartItems = [];

// Get wishlist items
app.get('/api/wishlist', (req, res) => {
  res.json(wishlistItems);
});

// Add item to wishlist
app.post('/api/wishlist', (req, res) => {
  const newItem = req.body;
  wishlistItems.push(newItem);
  res.sendStatus(200);
});

// Get cart items
app.get('/api/cart', (req, res) => {
  res.json(cartItems);
});

// Add item to cart
app.post('/api/cart', (req, res) => {
  const newItem = req.body;
  cartItems.push(newItem);
  res.sendStatus(200);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
