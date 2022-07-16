const {generateRouterCreator} = require("../config/routeCreator");
const pessoasHandler = require("./pessoasHandler");

const routerManeger = generateRouterCreator(pessoasHandler)

routerManeger.addRoute("get", "/", "get");
routerManeger.addRoute("post", "/", "post");
routerManeger.addRoute("post", "/:id", "post");
routerManeger.addRoute("post", "/:id/:id2", "post");
routerManeger.addRoute("put", "/", "put");
routerManeger.addRoute("delete", "/", "delete");
routerManeger.addRoute("options", "/", "options");

module.exports= {
    router: routerManeger.router
}