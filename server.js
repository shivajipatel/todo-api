var express =   require("express");
var app =   express();
var PORT    =  process.env.PORT || 3000;

app.get('/',function(req,res){
    res.send('TO DO Api Root!');
});

app.listen(PORT,function(){
    console.log('To Do Server Started!');
});