const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{

    res.send("hi")
  })  
  app.get("/getdata",(req,res)=>{
    let sql=`select * from users `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.get("/getdataall",(req,res)=>{
    let sql=`select * from Products `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
           res.send(result)
      
        }
    })
    
})

app.get("/getvalues1",(req,res)=>{
    let sql=`select * from Products1  `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
           res.send(result)
      
        }
    })
    
})
app.get("/getvalues2",(req,res)=>{
    let sql=`select * from Products2  `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
           res.send(result)
      
        }
    })
    
})
app.get("/getvalues3",(req,res)=>{
    let sql=`select * from Products3  `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
           res.send(result)
      
        }
    })
    
})


app.get("/getvalues4",(req,res)=>{
    let sql=`select * from Products4  `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
           res.send(result)
      
        }
    })
    
})
app.get("/getvalues5",(req,res)=>{
    let sql=`select * from Products5  `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
           res.send(result)
      
        }
    })
    
})


app.get("/getdataa",(req,res)=>{
    let sql=`select * from products ORDER BY RAND() limit 6`;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

})

app.get("/getdata/:id",(req,res)=>{
    const id=req.params.id;
    let sqll=`select * from Productlist where id=${id}`;
    db.query(sqll,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
    

})
app.get("/sort/:price",(req,res)=>{
    const price=req.params.price;
    if(price==='200')
    {
        let sql=`select * from products WHERE price > 200`;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

    }
    else if(price==='200_500')
    {
        let sqll=`select * from products WHERE price >=200 && price <= 500`;
        db.query(sqll,(err,result)=>{
            if(err)
            {
                console.log(err)
            }
            else{
                res.send(result)
            }
        })

    }
    else if(price==='500_1000')
    {
        let sqll=`select * from products WHERE price > 500 && price <= 1000`;
        db.query(sqll,(err,result)=>{
            if(err)
            {
                console.log(err)
            }
            else{
                res.send(result)
            }
        })
        
    }
    

})


app.get("/account/:user_id",(req,res)=>{
    const user_id=req.params.user_id;
    let sqll=`select * from orders where user_id=${user_id} && orderstatus='order done'`;
    db.query(sqll,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
           
            res.send(result)
        }
    })

})
app.get("/myorder/:order_id",(req,res)=>{
    const order_id=req.params.order_id;
     let sqll=`select * from orders where order_id=${order_id}`;
    db.query(sqll,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
           
            res.send(result)
        }
    })
})




app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO users (email, username, password) VALUES (?, ?, ?)", [email, username, password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG EMAIL ADDRESS OR PASSWORD!"})
                }
            }
        }
    )
})

app.listen(3001, () => {
    console.log("running backend server");
})
