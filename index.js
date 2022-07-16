const express = require("express");
const {router} = require("./router");
const app = express();

app.use(express.json());

// get      >   nbuscar informações apenas por via query
// post     >   salvar informação com query ou body
// put      >   alterar informação com query ou body
// delete   >   deletar informações com query ou body
// options  >   buscar informações de como funciona o post, get, input e delete
console.clear();
app.use("/api/", router);

app.listen(8080, () => {
    console.log("O servidor esta rodando na url: http://localhost:8080")
});