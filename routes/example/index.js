export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })

  fastify.get('/about', async function (request, reply) {
  return 'Hexlet project'
})

}
