var db = require('../db/db.js');
sequelize = db.getConnection();
// extends base and import db connection in that 
class Service {

    // Returns information for all services
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

    // Returns information for a single service 
    static getService(call_params){

        var sql = `
            SELECT * FROM services S
            LEFT JOIN service_categories SC USING (category_id)
            WHERE service_id = :service_id
        `;
        var params = call_params;

        return sequelize.query(sql,{ replacements: params , type: sequelize.QueryTypes.SELECT }
        ).then(service => {
            return service;
        })
    }
}

module.exports = {
    Service: Service
};