import mongoose from "mongoose"

const schema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  photo: {type: String, required: true},
  stock: {type: Number, required: true},
  category_id: {type: mongoose.Types.ObjectId, ref: 'categories', required: true},
  price: {type: Number, required: true}
}, {timestamps: true})

export const Product = mongoose.model('product', schema)