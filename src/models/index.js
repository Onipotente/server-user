const dbConfig  = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.DIALECT,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)



const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('../models/user.model')(db.sequelize, db.Sequelize)
db.cars = require('../models/car.model')(db.sequelize, db.Sequelize)

db.cars.belongsTo(db.users, { foreignKey: "user_id", as: "users" })

const run = async () => {
};

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run();
});

module.exports = db