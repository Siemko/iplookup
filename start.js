const fastify = require("fastify")({
  logger: true
});
const cors = require('cors')
const geoip = require('geoip-lite');

fastify.get("/", async (request, reply) => {
  console.log('get leci')
  const geo = geoip.lookup(request.query.ip);
  reply.type("application/json").code(200);
  return geo;
});

fastify.listen(3000, '0.0.0.0', (err, address) => {
  if (err) throw err;
});

fastify.use(cors())