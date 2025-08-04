const express = require("express")
const router = express.Router()



router.get('/', (req, res)=>{
    res.send('La mia Pasticceria')
})

// index
router.get('/posts', (req, res)=>{
    res.send('elenco dei post')
})

// show
router.get('/posts/:id', (req, res)=>{
    res.send(`dettaglio del post con id: ${req.params.id}`)
})

// create

router.post('/posts', (req,res)=>{
    res.send('creazione del post')
})

// update

router.put('/posts/:id', (req,res)=>{
    res.send(`modifica totale del post con id: ${req.params.id} `)
})

// patch

router.patch('/posts/:id',(req,res)=>{
    res.send(`modifica parziale del post con id ${req.params.id}`)
})

// delete

router.delete('/posts/:id', (req,res)=>{
    res.send(`Cancella post con id ${req.params.id}`)
})



module.exports = router