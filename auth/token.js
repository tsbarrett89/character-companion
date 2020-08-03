const jwt = require('jsonwebtoken')

export default function createToken (user){
    const payload = {
        subject: user.id,
        username: user.username,
    }
    const secret = process.env.JWT_SECRET
    const options = {
        expiresIn: "8h"
    }

    return jwt.sign(payload, secret, options)
}