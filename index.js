import express from 'express' 
import {v4} from "uuid"
const app = express()
const PORT = 8000



let products = [
    { id: 1, name: "Бананы", price: 150 },
    { id: 2, name: "Яблоки", price: 100 },
    { id: 3, name: "Молоко", price: 95 },
    { id: 4, name: "Апельсины", price: 155 },
    { id: 5, name: "Шоколад", price: 87 },
    { id: 6, name: "Вода 1л", price: 45 }
  ];

  app.use(express.json());

  // Получение списка всех товаров
  app.get('/products', (req, res) => {
    res.json(products);
  });
  // Получеие конкретного товара по id
  app.get('/products/:id', (req, res) =>{
    const product = products.find(products => products.id == req.params.id)
   
    res.status(200).json(product)

  })
// Добавление нового товара
app.post('/products', (req, res) => {
    const { name, price } = req.body;
    

  
    // Создание нового товара
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    
    res.status(201).json(newProduct);
  });
  

app.listen(PORT, function () {
  console.log("Server started in PORT :", PORT)
})