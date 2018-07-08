var express =   require("express");
var bodyParser  =   require("body-parser");
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
    var todoID  =   req.params.id;
    var matchedTODO;
    todos.forEach(function(todo){
        if(todo.id == todoID){
            matchedTODO =   todo;
        }
    });
    if(matchedTODO){
        res.json(matchedTODO);
    }else{
        res.status(404).send('todo id is not find');
    }
});

app.post('/todos',function(req,res){
    var body    =   req.body;
    body.id =   todoNextId;
    todos.push(body);
    todoNextId++;
    res.json(body);
});

app.listen(PORT,function(){
    console.log('To Do Server Started!');
});