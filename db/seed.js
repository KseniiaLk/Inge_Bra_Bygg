const { Sequelize } = require('sequelize')
const { Task, User } = require('../models/index.js')
require('dotenv').config({path: '../config/.env'})

const bcrypt = require('bcryptjs')

const hashUserOne = bcrypt.hashSync(process.env.PASSWORD_ONE, 10)
const hashUserTwo = bcrypt.hashSync(process.env.PASSWORD_TWO, 10)

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
            user_email: "hgkls@al.se",
            role: 'admin',
        },
        {
            username: 'Ksenia',
            password_hash: hashUserTwo,
            user_email: "hgkls@ks.se",
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