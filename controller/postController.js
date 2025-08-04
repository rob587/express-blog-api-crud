const menu = require('../routers/post.js')
const posts = require('../data/posts.js')


 
function index (req, res){
    // const tags = req.query.tag

    // let filteredTags

    // if(tags != undefined){
    //     filteredTags = menu.filter((item)=>{
    //         return item.tags.includes(tags.toLowerCase)
    //     })
    // }
    // else{

    // }
     res.json(posts)
}

function show (req, res){
    const id = parseInt(req.params.id)
    const finder = posts.find(item=> item.id === id)

    if(!finder) {

        res.status(404)

        return res.json({
            erro: 'Non trovato',
            message: 'Post non trovato'
        })
    }

    res.send(finder)
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