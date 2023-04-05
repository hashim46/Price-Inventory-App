const express = require('express')

const router = express.Router()

const postControl = require('../controllers/postController')

const { authorize, confirmUserAccess } = require('../middleware/authMiddleware')

// seed 
router.get('/seed', postControl.seed)

// index
router.get('/', postControl.index)

// delete
router.delete('/:id', authorize, confirmUserAccess, postControl.delete)

// update
router.put('/:id', authorize, confirmUserAccess, postControl.update)

// create
router.post('/', authorize, postControl.create)

// show
router.get('/:id', postControl.show)

module.exports = router