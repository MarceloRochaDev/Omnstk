const connection=require('../database/connection')

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.params;
        
        const [count] = await connection('incidents').count();
        console.log(count);

        const incidents = await connection('incidents')
            .join('ongs','ongs.id','=','incidents.ong_id') // acessa tbm a tabela ongs e pega os dados da ong presente nela
            .limit(5) //limita os registros a serem pegados de 5 em 5(paginação)
            .offset((page-1)*5) // pula 5 por pagina
            .select(['incidents.*', // seleciona todos dados da tabela incidents
                'ongs.name',          //seleciona os nomes da tabela ongs
                'ongs.email',         // ...
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        
        response.header('X-Total-Count', count['count(*)']); // envia no header da requisição o numero de casos registrados

        return response.json(incidents);
    },


    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        const [id]=await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {   // ta dando erro nesse metodo
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
        if (incident.ong_id != ong_id) {
            return response.status(401).json({error:'Operation not permited.'}) //401=status n autorizado
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}