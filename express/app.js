const express = require('express');
const app = express();
const db = require('./db/list')

app.get('/',(req,res)=>{
    res.send('this is express')
    res.end()
})

// app.get('/test',test)

app.use('/retrieve',(req,res)=>{
    res.set({
        "Access-Control-Allow-Origin":"http://localhost:8080",
        "Access-Control-Allow-Headers":"Content-Type"
    })
    res.json({msg:"hello from Express"})
})

// app.get('/404',(req,res)=>{
//     res.set({
//         "Access-Control-Allow-Origin":"http://localhost:8080",
//         "Access-Control-Allow-Headers":"Content-Type"
//     })
//     res.send('sorry, unknown URL')
// })

app.use('/test', (req, res) => {
  res.json(db)
})

app.all('/*',(req,res)=>{
    // res.set({
    //     "Access-Control-Allow-Origin":"http://localhost:8080",
    //     "Access-Control-Allow-Headers":"Content-Type"
    // })
    // res.redirect('/404')
    res.send('sorry, unknown URL')
})

app.listen(9000,()=>{
    console.log('express app run at port 9000')
})
