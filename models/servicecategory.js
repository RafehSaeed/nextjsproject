var db = require('../db/db.js');
sequelize = db.getConnection();
// extends base and import db connection in that 
class ServiceCategory {


    constructor(category_id , category_nm){

        this.category_id  = category_id;
        this.category_nm = category_nm;
    }

    // Returns all the categories for services 
    static getServiceCategories(){

        var sql = `
            SELECT category_id , category_nm as categoryName
            FROM service_categories 
        `;
        var params = {};

        return sequelize.query(sql,{ replacements: params , type: sequelize.QueryTypes.SELECT }
        ).then(categories => {
            return categories;
        })


    }
}

module.exports = {
    ServiceCategory: ServiceCategory
};