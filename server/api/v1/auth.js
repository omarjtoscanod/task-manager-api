const { sign } =require ('jsonwebtoken');
const config = require ('./../../config')

const signToken = function (payload, expiresIn = config.token.expires){
    return sign(payload, config.token.secret, {
        expiresIn,
    });
};

module.exports={
    signToken,
};