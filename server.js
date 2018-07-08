var express =   require("express");
var app     =   express();
var PORT    =   process.env.PORT || 3001;
var todos   =   [
                {
                    'id':   1,
                    'description':  'search collection merger',
                    'completed':    false
                },
                {
                    'id':   2,
                    'description':  'mobile search revamp',
                    'completed':    false
                },
                {
                    'id':   3,
                    'description':  'Filter changes',
                    'completed':    true
                }
            ];

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

app.listen(PORT,function(){
    console.log('To Do Server Started!');
});