import 'dotenv/config.js'
import '../../config/database.js'
import { Category } from '../category_model.js'

let categories = [
  {
    name: 'INSUMOS'
  },{
    name: 'MOLDES'
  },
  {
    name: 'HERRAMIENTAS'
  },{
    name: 'FECHAS ESPECIALES'
  },
  {
    name: 'BANDEJAS'
  },{
    name: 'DECORACIONES FESTIVAS'
  },
]

Category.insertMany(categories)