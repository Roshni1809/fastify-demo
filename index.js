const fastify = require('fastify')({ logger: true })
require('dotenv').config()
const MarksheetRoutes = require("./routes/marksheets")

fastify.register(MarksheetRoutes)

const startServer = async () => {
    try {
        await fastify.listen(`${process.env.PORT}`)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

startServer()