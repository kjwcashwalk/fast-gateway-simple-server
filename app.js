const gateway = require('fast-gateway');
const cors = require('cors')();
const helmet = require('helmet')();

const auth  = require('./auth');

const PORT = 8080;

gateway({
    middlewares: [
        cors,
        helmet
    ],
    routes: [
        {
            prefix: '/service1',
            target: 'http://127.0.0.1:3000',
            middlewares:[(req, res, next) => {
                auth.tokenVerify(req, res, next);
            }]
        }
    ]
}).start(PORT).then(server => {
    console.log(`API gateway listening on ${PORT} port!`)
});
