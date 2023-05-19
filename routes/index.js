import express from 'express'
const router = express.Router()
import categories from './categories_route.js'
import products from './products_route.js'

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.use('/categories', categories)
router.use('/products', products)

export default router
