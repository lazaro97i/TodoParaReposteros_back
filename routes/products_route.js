import express from "express"
const router = express.Router()
import controller from "../controller/products_controller.js"

const { read } = controller

router.get('/', read)

export default router
