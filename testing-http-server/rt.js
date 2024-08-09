var hand = require('./handler')

class Route {
    constructor(path,method,handler) {
        this.path = path;
        this.method = method;
        this.handler = handler;
    }
}

exports.routes = new Map([
    ["pagina 1",
        new Route("/tutu", "GET",hand.tutugames)
    ],
]);