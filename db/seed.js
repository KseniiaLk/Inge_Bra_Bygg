const { Sequelize } = require('sequelize')
const { Task, User } = require('../models/index.js')

const bcrypt = require('bcryptjs')

const hashUserOne = bcrypt.hashSync('Alex', 10)
const hashUserTwo = bcrypt.hashSync('Ksenia', 10)

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/dbfile.sqlite'
})

User.sync()
.then(() => {
    return User.bulkCreate([
        {
            username: 'Alex',
            password_hash: hashUserOne,
            role: 'admin',
        },
        {
            username: 'Ksenia',
            password_hash: hashUserTwo,
            role: 'admin',
        }
    ])
}, {sequelize})

Task.sync()
.then(() => {
    return Task.bulkCreate([
        {
            message: 'Alex test',
            images: 'Test image här',
        },
        {
            message: 'Ksenias test message',
            images: 'Test image här',
        }
    ])
}, {sequelize})