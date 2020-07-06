const express = require('express');

const server = express();

var tarefas = [
<<<<<<< HEAD
    {id:1,descricao:"Comprar Arrozes",finalizado:true},
    {id:2,descricao:"Arrumar a Cama",finalizado:true},
    {id:3,descricao:"Fazer Exercícioss",finalizado:false}
=======
    {id:1,descricao:"Comprar Pão",finalizado:false},
    {id:2,descricao:"Arrumar o Quarto",finalizado:true}
>>>>>>> b5da96009f3d92b6dc2ee4af8ffe652c13bf893d
]

// middlewares:
server.use(express.json());

server.get('/tarefa', (request, response) => {
    return response.json(tarefas);
})

server.get('/tarefa/:id', (request, response) => { 
    const id = request.params.id;   
    const tarefa = tarefas.filter(t => t.id == id);
    return response.json(tarefa);
})

server.post('/tarefa', (request, response) => { 
    const tarefa = request.body;
    tarefas.push(tarefa);
    return response.status(201).send("Tarefa inclusa com sucesso!");
})

server.delete('/tarefa/:id', (request, response) => {
    const id = request.params.id;
    tarefas = tarefas.filter(t => t.id != id);
    return response.status(200).send("Tarefa excluída com sucesso!");
})

server.put('/tarefa/:id', (request, response) => {
    const id = request.params.id;
    const tarefa = request.body;

    tarefas.forEach(t => {
        if(t.id == id) {
            t.descricao = tarefa.descricao;
            t.finalizado = tarefa.finalizado;
            return;
        }
     })

<<<<<<< HEAD
    return response.send("Tarefa alterada com sucesso!");
=======
    return response.send("Tarefada alterada com sucesso!");
>>>>>>> b5da96009f3d92b6dc2ee4af8ffe652c13bf893d
    
})

server.listen(process.env.PORT || 3000);