const express = require('express');
const app = express();
const mockUserDada=[
    {name:'Mark'},
    {name:'Jill'}
]
app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'succesfully got users. Nice!',
        users: mockUserDada
    })
})

app.listen(8000,function(){
    console.log("server is running")
})
