var express=require('express')
var app=express()
var bodyParser=require('body-parser')

var bodyParserJson=bodyParser.json({extended:false})
// var urlEncoded=bodyParser.urlencoded()
app.get('/',function(request,response){
    response.send('No response')

})
app.get('/admin',function(request,response){
    response.send('No admin') 
})
app.get('/product',function(request,response){
    console.log(request.query.id)
    console.log(request.query.categoryId)
    response.send('No d') 
})
app.post('/product',bodyParserJson,function(request,response){
    console.log(request.body)
    response.send("Post methodu")
})
app.delete('/product',function(request,response){
    response.send("delete methodu")
})
var server=app.listen(8080)