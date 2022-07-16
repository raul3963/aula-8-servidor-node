const express = require("express")

function generateRouterCreator(fileReference) {
    const router = express.Router();

    function addRoute(method, route, functionName) {
        router[method](route, fileReference[functionName]);
    }

    return { router, addRoute };
}

module.exports = {
    generateRouterCreator
}