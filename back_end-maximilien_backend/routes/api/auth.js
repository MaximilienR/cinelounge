const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../../models/userSchema')
const config = require('config')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth.js')


router.post('/', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }
    else {
        User.findOne({ email })
            .then(user => {
                console.log("test3", user)
                if (!user) return res.status(400).json({ msg: "L'utilisateur n'existe pas" });
                else {
                    bcrypt.compare(password, user.password)
                        .then(isMatch => {
                            if (!isMatch) return res.status(400).json({ msg: 'Mot de passe incorrect' })
                            else {
                                jwt.sign({
                                    id: user.id
                                },
                                    config.get('jwtSecret'),
                                    { expiresIn: 500 },
                                    (err, token) => {
                                        if (err) throw err;
                                        res.json({
                                            user: {
                                                token: token,
                                                id: user.id,
                                                firstName: user.firstName,
                                                lastName: user.lastName,
                                                email: user.email
                                            }
                                        })
                                    }
                                )
                            }
                        })
                }


            })
    }

});

router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
})

module.exports = router