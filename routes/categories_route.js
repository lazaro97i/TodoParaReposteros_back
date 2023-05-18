import express from 'express'
const router = express.Router()
import controller from '../controller/categories_controller.js'

const { read } = controller

router.get('/', read)

export default router