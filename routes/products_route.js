import express from "express"
import controller from "../controller/products_controller.js"
import validator from "../middleware/validator.js"
import schema from "../schemas/product_schema.js"

const router = express.Router()
const { read, create} = controller

router.get('/', read)
router.post('/',validator(schema), create)

export default router
