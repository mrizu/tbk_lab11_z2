const express = require('express');
const app = express();

app.get('/add/:a/:b', (req,res)=>{
  let a = parseInt(req.params.a)
  let b = parseInt(req.params.b)
  if(Number.isInteger(a) && Number.isInteger(b)){
    let result = a+b;
    res.send(result.toString())
  }else{
    res.send("Both parameters must be a number.")
  }
})

app.get('/mul/:a/:b', (req,res)=>{
  let a = parseInt(req.params.a)
  let b = parseInt(req.params.b)
  if(Number.isInteger(a) && Number.isInteger(b)){
    let result = a*b;
    res.send(result.toString())
  }else{
    res.send("Both parameters must be a number.")
  }
})

app.get('/div/:a/:b', (req,res)=>{
  let a = parseInt(req.params.a)
  let b = parseInt(req.params.b)
  if(Number.isInteger(a) && Number.isInteger(b)){
    if (b===0){
      res.send("Can't divide by 0.")
    }else{
      let result = a/b;
      res.send(result.toString())
    }
  }else{
    res.send("Both parameters must be a number.")
  }
})

app.listen(3000, '0.0.0.0', ()=>{
  console.log('Application listening at 0.0.0.0:3000');
})
