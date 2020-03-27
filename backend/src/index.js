const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // o corpo das requisições serão em json -> transforma de json pra objeto js
app.use(routes);
/*
 Rota/ Recurso(ex:usuario em users)
*/

/*
Métodos HTTP:
GET: Buscar/listar uma informação do backend (ir no browser e da um enteder na url)
POST: Criar uma informação no backend
PUT: Alterar uma informação no backend
DELETE: Deletar uma informação no backend
*/

/*
Tipos de parâmetros:
    Query params: Parâmetros nomeados enviados na rota após "?" ( Filtros,paginação)
    Route params: Parâmetros usados para identificar recursos(ex: /users/:id, identifica o usuario)
    Request body: Corpo da requisição, utilizado para criar ou alterar recursos (nome,email,etc..)
*/

/* 
Banco de dados:
  SQL: -Driver: select * from users
       -Query builder: talbe('users').select(*).where()
*/
        //COM METODO GET EXEMPLO
// app.get('/users/:id', (request, response) => {
//    // const params = request.query; //url:'/users' pega os parametros passados pelo metodo query ( ?params)
//     //const params = request.params; // url:'/users/:id' , pega o id passado pelo usuario
//     
//     console.log(params);

//     return response.json({ 
//         olá: 'Eai'
//     });
// });

app.listen(3333);

