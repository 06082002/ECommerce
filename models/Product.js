
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  // Add other fields as needed (e.g., category, image URLs)
});

module.exports = mongoose.model('Product', productSchema);


