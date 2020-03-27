//pacote do node crypto que serve para
//criar chaves criptografadas e/ou chaves randômicas
const crypto = require('crypto');

module.exports = function generateUniqueId(){
    return crypto.randomBytes(4).toString('HEX');
}