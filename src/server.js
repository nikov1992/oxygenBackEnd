const express = require('express')
const path = require('path');
const app = express ();


//ENDPOINTS!! 



app.get('/' , (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use(express.static('public'));


app.get('/api/users', (req, res)=>{
    const users = [{
        id : '123',
        name : 'Shaun',
    },{
        id : '1',
        name : 'Nicolas',
    },{
        id : '22',
        name : 'Federico',
    }];
    res.json(users);
});

app.listen(8080, ()=> {
    console.log('server running in port 8080')
});



