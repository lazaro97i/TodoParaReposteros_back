import 'dotenv/config.js'
import '../../config/database.js'
import { Product } from '../product_model.js'

let products = [
  {
    name: 'Molde para muffins',
    description: 'asd',
    photo: 'https://gastronomicainternacional.com/wp-content/uploads/2020/05/tecnicas-de-reposteria-2-1024x576.jpg',
    stock: 1,
    category_id: 'asd',
    price: 3000
  },
  {
    name: 'Crema para tortas',
    description: 'asd',
    photo: 'https://csaconsultores.com/wp-content/uploads/2022/09/peligros-alimentarios-en-la-reposteria.png',
    stock: 1,
    category_id: 'asd',
    price: 1500
  },
  {
    name: 'Dulce de leche repostero 1kg',
    description: 'asd',
    photo: 'https://mandolina.co/wp-content/uploads/2022/08/Panaderia-y-reposteria-dulce-02.png',
    stock: 1,
    category_id: 'asd',
    price: 2000
  },
  {
    name: 'Bandeja de aluminio 10cm',
    description: 'asd',
    photo: 'https://animalgourmet.com/wp-content/uploads/2020/05/reposter%C3%ADa-2-e1590589381790.jpg',
    stock: 1,
    category_id: 'asd',
    price: 700
  },
  {
    name: 'Molde para helado',
    description: 'asd',
    photo: 'https://enmicasa.com/wp-content/uploads/2017/05/funcion_de_los_ingredientes_en_la_reposteria.jpg',
    stock: 1,
    category_id: 'asd',
    price: 500
  },
  {
    name: 'Chocolate Nutella',
    description: 'asd',
    photo: 'https://aprende.com/wp-content/uploads/2021/10/curso-online-de-reposteria.jpg',
    stock: 1,
    category_id: 'asd',
    price: 4500
  },
]

Product.insertMany(products)
