const menu = require('../routers/post.js')

function index (req, res){
     res.send('elenco dei post')
}

function show (req, res){
    res.send(`dettaglio del post con id: ${req.params.id}`)
}

function store (req, res){
    (req,res)=>{
    res.send('creazione del post')
}}

function update (req, res){
    (req,res)=>{
    res.send(`modifica totale del post con id: ${req.params.id} `)
}}

function destroy (req, res){
    (req,res)=>{
    res.send(`Cancella post con id ${req.params.id}`)
}
}

module.exports = {index, show, store, update, destroy}