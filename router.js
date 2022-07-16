const express = require("express");
const pessoasController = require("./api/pessoas/pessoasController");
//const usuarios = require("./api/usuarios")
//const pessoas = require("./api/pessoas")
const router = express.Router();

router.use("/pessoas/", pessoasController.router);
//router.use("/pessoas/", pessoas.router);
//router.use("/usuarios/", usuarios.router);

module.exports = {
    router
}