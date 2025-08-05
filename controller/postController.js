const menu = require('../routers/post.js')
const posts = require('../data/posts.js')


 
function index (req, res){
    const tag = req.query.tag


    let filteredTags = posts

    if(tag){
        filteredTags = posts.filter(item =>{
            const lowerTags = item.tags.map(tag => tag.toLowerCase()).includes(tag.toLowerCase())

            // return lowerTags
            })
        }

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

    console.log(req.body)


    const newId = posts[posts.length - 1].id + 1 

   const newPosts = {
    id: newId,
    title: req.body.title,
    tags: req.body.tags
   }

    posts.push(newPosts)

    console.log(posts)
    
    res.status(201).json(newPosts)
}

function update (req, res){
    
    res.send(`modifica totale del post con id: ${req.params.id} `)
}

function modify (req, res) {
    res.send(`modifica parziale del post con id ${req.params.id}`)
}

function destroy (req, res){
    
     const id = parseInt(req.params.id)
    const finder = posts.find(item=> item.id === id)

    if(!finder) {

        res.status(404)

        return res.json({
            erro: 'Non trovato',
            message: 'Post non trovato'
        })
    }

    posts.splice(posts.indexOf(posts), 1)

    console.log(posts)

    res.sendStatus(204)

}


module.exports = {index, show, store, update, modify, destroy}