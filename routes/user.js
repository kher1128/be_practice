const router = require('express').Router()
const User = require('../models/User')
const CryptoJs = require('crypto-js')
const verify = require('../verifyToken')

// Update
router.put('/:id', verify, async(req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
            req.body.pasword = CryptoJs.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString()
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set:req.body
            })
            res.status(200).json(updatedUser)

        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You cna update only your account")
    }
})

// Delete

// Get

// Get All

// Get User Stats


module.exports = router