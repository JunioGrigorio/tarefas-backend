const express = require('express');

const server = express();

var tarefas = [
    {id:1,descricao:"Comprar Arroz",finalizado:true},
    {id:2,descricao:"Arrumar a Cama",finalizado:true},
    {id:3,descricao:"Fazer Exercícios",finalizado:false}
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
    tarefas.create(tarefa);
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

    return response.send("Tarefa alterada com sucesso!");
 
})

server.listen(process.env.PORT || 3000);
