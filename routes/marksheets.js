const { 
    GetMarksheets,
    AddMarksheet,
    UpdateMarksheet,
    DeleteMarksheet } = require('../controller/marksheets')


const marksheet_routes = (fastify, _, done) => {

    fastify.get('/marks',GetMarksheets)

    fastify.post("/marks",AddMarksheet)

    fastify.put("/marks",UpdateMarksheet)

    fastify.delete("/marks",DeleteMarksheet)

    done()
}

module.exports = marksheet_routes;