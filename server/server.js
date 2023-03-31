import { Sequelize, Op } from 'sequelize';
import express from 'express'
import schema from './schema/product.js';
import userschema from './schema/users.js';
import product from './schema/product.js';
const app = express()
const port = 3001

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json())

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'data/data.sqlite'
});

const Products = sequelize.define('products', schema, {timestamps: false});
await Products.sync()

const Users = sequelize.define('users', userschema, {timestamps: false});
await Users.sync()

app.get('/', async (req, res) => {
    res.send(await Products.findAll())
})

app.post('/login', async (req, res)=>{
    const {username,password} = req.body
    if(!(username&&password)){
        return res.status(400).send()
    }
    const user = await Users.findOne({ where: { username: username, password: password } })
    if (user === null){
        return res.status(400).send()
    } else{
        return res.send({email: user.email})
    }
})

app.post('/register', async (req, res)=>{
    const {username,password,email,admin} = req.body
    if(!(username&&password&&email)){
        return res.status(400).send()
    }
    const user = await Users.findOne({ where: { 
        [Op.or]:[{username: username}, {email: email}] 
    }})
    if (user){
        return res.status(400).send()
    } else{
        await Users.create({username: username, password: password, email: email, admin: !!admin})
        return res.send()
    }
   
})

app.post('/addproduct', async (req, res)=>{
    const {name,stock,price,image,active} = req.body
    if(!(name&&stock&&price&&image&&active)){
        return res.status(400).send()
    }
    const product = await Products.findOne({ where: { 
        name: name 
    }})
    if (product){
        return res.status(400).send()
    } else{
        await Products.create({name,stock,price,image,active})
        return res.send()
    }
   
})

app.post('/deleteUser/:id', async(req, res)=>{
    const {id}= req.params
    const user = await Users.findOne({where: {id}})
    if(user){
        user.destroy()
    }
    return res.send()
})

app.post('/updateProduct/:id', async(req, res)=>{
    const {id}= req.params
    const {name,price,stock,image,active} = req.body 
    const product = await Products.findOne({where: {id}})
    if(product){
        await product.update({name,price,stock,image,active})
    }
    return res.send()
})


app.get('/getusers', async (req, res)=>{
    
    const users = await Users.findAll({})
    return res.send(users)

})

app.get('/product/:id', async (req, res)=>{
    const {id}= req.params
    const product = await Products.findOne({where: {id}})
    return res.send(product)

})

app.get('/getproducts', async (req, res)=>{
    
    const products = await Products.findAll({})
    return res.send(products)

})




app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})

