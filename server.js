var express =   require("express");
var bodyParser  =   require("body-parser");
var _   =   require("underscore");
var app     =   express();
var PORT    =   process.env.PORT || 3001;
var todos   =   [];
var todoNextId  =   1;

app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('TO DO Api Root!');
});

app.get('/todos',function(req,res){
    res.json(todos); 
});

app.get('/todos/:id',function(req,res){
    var todoID  =   parseInt(req.params.id,10);
    var matchedTODO =   _.findWhere(todos,{id:todoID});
    if(matchedTODO){
        res.json(matchedTODO);
    }else{
        res.status(404).send();
    }
});

app.post('/todos',function(req,res){
    var body    =   req.body;

    if(!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0){
        return res.status(400).send();
    }
    body.id =   todoNextId;
    todos.push(body);
    todoNextId++;
    res.json(body);
});

app.listen(PORT,function(){
    console.log('To Do Server Started!');
});