import Joi from 'joi-oid'

const schema = Joi.object({
  name: Joi.string().required().min(3).max(200).messages({
    'any.required':'Nombre obligatorio',
    'string.empty':'Nombre obligatorio',
    'string.min':'Nombre demasiado corto',
    'string.max':'Nombre demasiado largo',
    'string.base':'El nombre debe ser un texto',
  }),
  description: Joi.string().required().min(3).max(10000).messages({
    'any.required':'Descripcion obligatoria',
    'string.empty':'Descripcion obligatoria',
    'string.min':'Descripcion demasiado corta',
    'string.max':'Descripcion demasiado larga',
    'string.base':'La descripcion debe ser un texto',
}),
  photo: Joi.string().uri().required().messages({
    'any.required':'Foto obligatoria',
    'string.empty':'Foto obligatoria',
    'string.min':'URL de foto demasiado corto',
    'string.base':'La foto debe ser una URL',
    'string.uri':'URL invalida',
}),
  stock: Joi.number().required().positive().max(10000).integer().messages({
    'any.required':'Stock obligatorio',
    'number.empty':'Stock obligatorio',
    'number.max':'Numero de stock demasiado grande',
    'number.base':'El stock debe ser un numero valido',
    'number.positive':'El numero de stock debe ser positivo'
}),
  category_id: Joi.objectId().required().messages({
    'invalid':'Debe seleccionar una categoria'
  }),
  price: Joi.number().required().positive().messages({
    'any.required':'Precio obligatorio',
    'number.empty':'Precio obligatorio',
    'number.base':'El precio debe ser un numero valido',
    'number.positive':'El precio debe ser un valor positivo'
  })
})

export default schema