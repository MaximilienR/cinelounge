const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

// User Model
const User = require('../../models/userSchema')

// @route POST api/users
// @Desc Enregistrer nouvel utilisateur
//Accès Public 
//https://www.youtube.com/watch?v=de5gkk_40Eo&list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE&index=48


router.post('/', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }
    console.log("clg email", email)
    User.findOne({ email: email })
        .then(user => {
            console.log("test3", user)
            if (user) return res.status(400).json({ msg: 'User already exists' });
            else {
                const newUser = new User({
                    username,
                    email,
                    password
                });
                bcrypt.genSalt(10, (err, salt) => {
                    console.log("test 2", err)
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.email = email
                        newUser.username = username
                        newUser.save()
                            .then(user => {
                                console.log("id", user.id)
                                jwt.sign({
                                    id: user.id,
                                },
                                    config.get('jwtSecret'),
                                    { expiresIn: 500 },
                                    (err, token) => {
                                        if (err) throw err;
                                        res.json({
                                            user: {
                                                token: token,
                                                id: user.id,
                                                username: user.username,
                                                email: user.email
                                            }
                                        })

                                    }
                                )
                            })
                    })
                })
            }



        })
});


module.exports = router