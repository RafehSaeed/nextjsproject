var db = require('../db/db.js');
sequelize = db.getConnection();
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
// extends base and import db connection in that 
class User {
    
    // Registers the user
    static registerUser(call_params){

        var sql = `
            INSERT INTO users(
                nm_prefix
                nm_first
            ,   nm_middle
            ,   nm_last
            ,   nm_suffix
            ,   email_addr
            ,   password
            ,   user_type)
            VALUES (
                :nm_prefix
            ,   :nm_first
            ,   :nm_middle
            ,   :nm_last
            ,   :nm_suffix
            ,   :email_addr
            ,   :password
            );
            RETURNING user_id
        `;

        var params = call_params;

        return sequelize.query(sql,{ replacements: params , type: sequelize.QueryTypes.SELECT }
        ).then(services => {
            return services;
        })
    }

    // Logins the user
    static loginUser(call_params){

        // var sql = `
        //     SELECT * FROM services S
        //     LEFT JOIN service_categories SC USING (category_id)
        //     WHERE service_id = :service_id
        // `;
        // var params = call_params;

        // return sequelize.query(sql,{ replacements: params , type: sequelize.QueryTypes.SELECT }
        // ).then(service => {
        //     return service;
        // })
    }

    //  Sets the password
    static setPassword(password){
      this.salt = crypto.randomBytes(16).toString('hex');
      this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
    }

    // Checks if the password is valid or not 
    static validPassword(password) {
      var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
      return this.hash === hash;
    }

    // Returns token if login success
    static generateJwt() {
      var expiry = new Date();
      expiry.setDate(expiry.getDate() + 7);

      return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000),
      }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
    }
}

module.exports = {
    User: User
};