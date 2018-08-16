const fastify = require("fastify")({
  logger: true
});
const cors = require('cors')
const geoip = require('geoip-lite');
const getRequestIP = require('./getIp');

fastify.get("/", async (request, reply) => {
  fastify.log.error(`ip: ${getRequestIP(request.req)}`)
  const geo = geoip.lookup(getRequestIP(request.req));
  reply.type("application/json").code(200);
  return geo;
});

fastify.listen(8080, '0.0.0.0', (err, address) => {
  if (err) throw err;
});

fastify.use(cors())