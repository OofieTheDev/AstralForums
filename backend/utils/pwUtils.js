const bcrypt = require("bcrypt");
const saltRounds = 12;
const dbConnection = require("../auth-config/db").dbConnection;
const User = dbConnection.models.User;

async function validate(password, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, result) => {
            if (err) { reject (err)}
            resolve(result);
        })
    })
}


function genPass(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                reject(err);
            } else {
                resolve(hash);
            }
        })
    })
}

module.exports.validate = validate;
module.exports.genPass = genPass;