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
  }

}

export default controller