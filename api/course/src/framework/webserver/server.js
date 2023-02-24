const config = require('../../config/config')
const PORT = config.port;
const HOST = config.ip;

const server = (app) => {
    app.listen(config.port, () => {
        console.log(`Server running on port: ${HOST}:${PORT}`)
    })
    return app;
}

module.exports = server

