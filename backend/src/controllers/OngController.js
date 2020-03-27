const crypto = require('crypto'); // pra gerar um random id
const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
    return response.json(ongs);
    },

    async create(request, response) {
            // const params = request.query; //url:'/users' pega os parametros passados pelo metodo query ( ?params)
     //const params = request.params; // url:'/users/:id' , pega o id passado pelo usuario
     const {name, email, whatsapp, city, uf} = request.body;
     const id = crypto.randomBytes(4).toString('HEX') //crypto.randomBytes gera 4 byts aletorios 
     
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
     })     // async await pra esperar os dados de connection carregar pra prosseguir

     return response.json({ 
        id
     });
    }
}