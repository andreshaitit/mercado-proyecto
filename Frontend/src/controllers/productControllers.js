const path = require('path');
const productList = [
    {
      id:1,
      nombre:'Cafetera Moulinex',
      descuento:5,
      precio: 5000,
      img: 'img-cafetera-moulinex.jpg'
    },
    {
      id:2,
      nombre:'Macbook Pro',
      descuento:5,
      precio: 1500000,
      img: 'img-macbook-pro-2019.jpg'
    },
    {
      id:3,
      nombre:'Samsung Galaxy s10',
      descuento:30,
      precio: 200000,
      img: 'img-samsung-galaxy-s10.jpg'
    },
    {
      id:4,
      nombre:'Samsung Smart TV',
      descuento:10,
      precio: 500000,
      img: 'img-tv-samsung-smart.jpg'
    },
]

const productControllers = {
    detail: (req, res)=>{
        const productSelected = productList.find((product) =>{
            return product.id == req.params.id
        })
        res.render('../views/detailProduct.ejs',{
            title:"Detalle",
            productSelected
        })
    },
}
module.exports = productControllers