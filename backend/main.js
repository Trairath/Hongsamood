const express = require('express')
const cors = require('cors')
const app =express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const keytoken = 'webtokenhongsamood'

app.use(cors())

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'tri',
    database: 'hsm_db'
});

app.post('/register',jsonParser,function(req,res,next){
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        connection.execute(
            'INSERT INTO user(email,password,firstname,surname) VALUE (?,?,?,?)',
            [req.body.email,hash,req.body.firstname,req.body.surname],
            function(err, results, fields) {
              if (err){
                res.json({status:'error',massage: err})
                return
              }
              res.json({status:'pass'})
            }
          );
    });  
})

app.post('/login',jsonParser,function(req,res,next){
    connection.execute(
        'SELECT * FROM user WHERE email=?',
        [req.body.email],
        function(err, user, fields) {
          if (err){
            res.json({status:'error',massage: err})
            return
          }
          if(user.length === 0){
            res.json({status:'error',massage: err})
            return
          }
          bcrypt.compare(req.body.password, user[0].password, function(err, isLogin) {
            if(isLogin){
                const token = jwt.sign({email: user[0].email}, keytoken, { expiresIn: '1h' });
                res.json({status:'success',message:'login success', token})
                return
            }
            else{
                res.json({status:'success',message:'login failed'})
                return
            }
          });
        }
      );
})

app.post('/authen',jsonParser,function(req,res,next){
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, keytoken);
        res.json({status:'allow',decoded})
    }catch(err){
        res.json({status:'error',message: err.message})
    }
})

app.listen(5000, () => console.log("Server is Running..."));