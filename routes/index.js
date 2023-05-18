import express from 'express'
const router = express.Router()
import categories from './categories_route.js'

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.use('/categories', categories)

export default router
