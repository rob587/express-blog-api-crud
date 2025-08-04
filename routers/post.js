const express = require("express")
const router = express.Router()



router.get('/', )

// index
router.get('/posts', )

// show
router.get('/posts/:id', )

// create

router.post('/posts', )

// update

router.put('/posts/:id', )

// patch

router.patch('/posts/:id',(req,res)=>{
    res.send(`modifica parziale del post con id ${req.params.id}`)
})

// delete

router.delete('/posts/:id',)



module.exports = router