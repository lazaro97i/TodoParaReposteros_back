import { Product } from "../models/product_model.js"


const controller = {

  read: async(req, res, next) => {

    try{

      const products = await Product.find()

      if(products){
        res.status(200).json({
          success: true,
          response: products
        })
      }else{
        res.status(404).json({
          success: false,
          response: 'Products not found :('
        })
      }

    }catch(e){
      console.log(e)
      next()
    }
  },

  create: async(req, res, next) => {

    const {name, description, photo, price, stock} = req.body

    try{
      const product = await Product.create({name, description, photo, price, stock})
      if(product){
        res.status(201).json({
          success: true,
          response: "created",
          new_product: product
        })
      }
    }catch(e){
      console.log(e)
      next()
    }
  },

  deleteOne: async(req, res, next) => {

    const { _id } = req.body

    try{
      const product = await Product.findOneAndDelete({_id})
      if(product){
        res.status(200).json({
          success: true,
          response: 'deleted',
          product_delete: product
        })
      }else{
        res.status(404).json({
          success: false,
          response: 'Product not found :('
        })
      }
    }catch(e){
      console.log(e)
      next()
    }
  }
}

export default controller