const {sequelize} = require('../models')
module.exports = require('./server')
async function main(){
    await sequelize.sync()
}

main()