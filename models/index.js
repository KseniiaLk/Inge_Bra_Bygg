const Sequelize = require('sequelize')
//const User = require('./User')
const setupUser = require('./User')
const setupTask = require('./Task')

// Glöm inte sätta relation
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/dbfile.sqlite'
})

const User = setupUser(sequelize)
const Task = setupTask(sequelize)

User.hasMany( Task, {foreignKey: {name:'worker_id', allowNull:false}})
Task.belongsTo( User, {
    foreignKey: 'worker_id'
}) //med en foregin key

User.hasMany( Task, {foreignKey: 'client_id'})
Task.belongsTo( User, {foreignKey: 'client_id'} )

module.exports = {User, Task, sequelize}