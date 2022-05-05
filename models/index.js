const Sequelize = require('sequelize')
//const User = require('./User')
const setupUser = require('./User')
const Task = require('./Task')

// Glöm inte sätta relation
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/dbfile.sqlite'
})

const User = setupUser(sequelize)

User.hasMany( Task, {foreignKey: 'user_id'})
Task.belongsTo( User )

module.exports = {User, Task}