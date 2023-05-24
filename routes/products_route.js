import express from "express"
const router = express.Router()
import controller from "../controller/products_controller.js"

const { read, create} = controller

router.get('/', read)
router.post('/', create)

export default router
