const express = require('express')
const router = express.Router()
const User = require('../models/User')

// 등록
router.post('/register', (req, res) => {
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })

    const user = newUser.save()

    res.json(user)
})


module.exporst = router