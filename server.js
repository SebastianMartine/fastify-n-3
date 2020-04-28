const fastify = require('fastify')();

fastify.register(require('./routes/suma'), { prefix: '/suma' });

fastify.listen(8010, function(err, address) {
    if (err) {
        console.log(err);
        process.exit(1);
    } else {
        console.log("Server corriendo en el puerto 8010");
    }
});