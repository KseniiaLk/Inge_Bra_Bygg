const Sequelize = require('sequelize')
//const User = require('./User')
const setupUser = require('./User')
const setupTask = require('./Task')
const setupMessage = require('./Message')

// Glöm inte sätta relation
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/dbfile.sqlite'
})

const User = setupUser(sequelize)
const Task = setupTask(sequelize)
const Message = setupMessage(sequelize)

User.hasMany( Task, {foreignKey: {name:'worker_id', allowNull:false}})
Task.belongsTo( User, {
    foreignKey: 'worker_id'
}) //med en foregin key

User.hasMany( Task, {foreignKey: 'user_id'} )
Task.belongsTo( User, {foreignKey: 'user_id'} )

Message.belongsTo(User, {foreignKey: 'user_id'}); 
Message.belongsTo(Task, {foreignKey: 'task_id'});

module.exports = {User, Task, Message, sequelize}