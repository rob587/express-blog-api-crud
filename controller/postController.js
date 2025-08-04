const menu = require('../routers/post.js')
const posts = require('../data/posts.js')

function index (req, res){
     res.json(posts)
}

function show (req, res){
    res.send(`dettaglio del post con id: ${req.params.id}`)
}

function store (req, res){
    
    res.send('creazione del post')
}

function update (req, res){
    
    res.send(`modifica totale del post con id: ${req.params.id} `)
}

function modify (req, res) {
    res.send(`modifica parziale del post con id ${req.params.id}`)
}

function destroy (req, res){
    
    res.send(`Cancella post con id ${req.params.id}`)
}


module.exports = {index, show, store, update, modify, destroy}