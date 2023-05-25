import Joi from 'joi-oid'

const schema = Joi.object({
  name: Joi.string().required().min(3).max(200),
  description: Joi.string().required().min(3).max(10000),
  photo: Joi.string().uri().required(),
  stock: Joi.number().required().positive().max(10000).integer(),
  category_id: Joi.objectId().required(),
  price: Joi.number().required().positive()
})

export default schema