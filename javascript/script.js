
fetch('/api/users')
        .then(response => response.json())
        .then(users => console.log(users)); 


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


fetch('http://localhost:8080/api/users')
.then(response => response.json())
.then(users => console.log(users[0].name)) //it's return a arsdsdray.
.catch(err=>console.log(err))

let a = 1
console.log(`el valor es : ${a}`)


