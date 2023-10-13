const fs = require('fs');

const expess=require('express');

const router=expess.Router();


router.get('/login',(req,res,next) =>{
    res.send(`<form action="/login" method="POST" onsubmit="localStorage.setItem('title',document.getElementById('title').value)"><label for="title">Username</label><br><input type="text" name="title" id="title"><br><br><button type="submit">Login</button></form>`)
});

router.post('/login',(req,res,next) =>{
    
    res.redirect('/');
});

module.exports=router;