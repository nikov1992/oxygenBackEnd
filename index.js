import express from "express";
// import path from 'path'
import mysql from "mysql"
// import ejs from 'ejs';



// const path = require('path');
const app = express ();

//this is validate json datos
app.use(express.json());

//this is for validate all datos
app.use(express.urlencoded({extended:false}));

app.set("view engine" , "ejs");
 

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})


app.get('/' , (req, res)=>{
    res.render("registro")
})



app.post( '/validar' , (req,res)=>{
    //save all datos in the variable datos
    const datos = req.body;

    // let id = datos.id;
    let name = datos.Name;
    let email = datos.Email;
    let user = datos.User;
    let password = datos.Password;
    let registrar = "INSERT INTO usuarios (id,name,email,user,password) VALUES ('NULL','"+name+"','"+email+"','"+user+"','"+password+"')"

    db.query(registrar, function(error){
        if(error){
            throw error;
        }else{
            console.log("Datos saved ok")
            res.send("USUARIO GUARDADO CORRECTAMENTE")
        }
    })



    // db.query(registrar,(err,data)=>{
    //     if(err) return res.json(err)
    //     return res.json(data);
    // })
    

})

// app.use(express.static('public'));

// app.get("/usuarios" , (req,res)=>{
//     const q = "SELECT * FROM usuarios"
//     // res.send("entre aca!")
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data);
//     })
// })

// db.connect(function(err){
//     if (err) {
//         throw err;
//     }
//     console.log('Conexión exitosa a la base de datos');
// });
// db.end();


// app.get('/api/users', (req, res)=>{
//     const users = [{
//         id : '123',
//         name : 'Shaun',
//     },{
//         id : '1',
//         name : 'Nicolas',
//     },{
//         id : '22',
//         name : 'Federico',
//     }];
//     res.json(users);
// });

app.listen(8080, ()=> {
    console.log('server running in port 8080')
});



