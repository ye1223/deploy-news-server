const jsonwebtoken = require('jsonwebtoken')

const secret = 'a random string'

const JWT = {
    generate(value,expires){
        return jsonwebtoken.sign(value,secret,{expiresIn:expires})
    },
    verify(token){
        try {
            return jsonwebtoken.verify(token,secret)
        }catch(e){
            return false
        }
    }
}

/* const token = JWT.generate({name:'123'},'10s')
console.log(token)
console.log(JWT.verify(token,secret)) */

module.exports = JWT