var db = require('../db/db.js');
sequelize = db.getConnection();
// extends base and import db connection in that 
class Service {

    // Returns all the the services
    static getServices(){

        var sql = `
            SELECT * FROM services S
            LEFT JOIN service_categories SC USING (category_id)
        `;
        var params = {};

        return sequelize.query(sql,{ replacements: params , type: sequelize.QueryTypes.SELECT }
        ).then(services => {
            return services;
        })
    }
}

module.exports = {
    Service: Service
};