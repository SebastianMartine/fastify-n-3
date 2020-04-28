async function routes(fastify, options) {
    fastify.get('/:paramone/:paramtwo', async(req, res) => {
        const parone = parseInt(req.params.paramone);
        const partwo = parseInt(req.params.paramtwo);
        const sum = parone + partwo;

        res.send({
            NumberOne:  parone,
            NumberTwo:  partwo,
            resultado: "La suma  es: " + sum
        });
    });
}

module.exports = routes;