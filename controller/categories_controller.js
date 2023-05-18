import { Category } from '../models/category_model.js'

const controller = {
  read: async(req, res, next) => {
    try{
      const categories = await Category.find()
      if(categories){
        res.status(200).json({
          success: true,
          response: categories,
        })
      }else{
        res.status(404).json({
          success: false,
          response: 'Categories not found'
        })
      }
    }catch(e){
      console.log(e)
      next()
    }
  }
}

export default controller

