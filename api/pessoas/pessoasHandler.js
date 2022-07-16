

function get(req, res) {
   console.log("get", req.body, req.query)
    res.json({ok: "buscar pessoas"});
 }
 
 function post(req, res) {
   console.log("post", req.body, req.query, req.params)
    res.json({ok: "salvar pessoas"});
 }
 
 function put(req, res) {
   console.log("put", req.body, req.query)
    res.json({ok: "editar pessoas"});
 }
 
 function _delete(req, res) {
   console.log("delete", req.body, req.query)
    res.json({ok: "deletar pessoas"});
 }

 function options(req, res) {
   console.log("options", req.body, req.query)
    res.json({ok: "ver informações de requisição"});
 }

 module.exports = {
    get,
    post,
    put,
    delete: _delete,
    options
 }