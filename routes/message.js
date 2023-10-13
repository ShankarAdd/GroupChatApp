const express = require('express');

const fs=require('fs');

const router=express.Router();

router.get('/',(req,res,next) =>{

    fs.readFile('message.txt',(err,data) =>{
        if(err){
            console.log(err);
        }

        res.send(`${data} 
                <form action="/" method="POST" onsubmit="document.getElementById('title').value=localStorage.getItem('title')">
                <label for="title">Username</label><br>
                <input type="text" name="message" id="message" placeholder="message"><br>
                <input type="hidden" id="title" name="title"><br>
                <button type="submit">Login</button>
                </form>`)
    })
});

router.post('/',(req,res,next) =>{

    fs.writeFile('message.txt',`${req.body.title} : ${req.body.message} `,{flag :'a'} ,(err)=>{

        if(err){
            console.log(err);
        }

        res.redirect('/');

    })
    
})

module.exports = router;