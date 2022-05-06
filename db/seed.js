const { Sequelize } = require('sequelize')
const { Task, User } = require('../models/index.js')
const bcrypt = require('bcryptjs')

require('dotenv').config({path: './config/.env'})

const hashUserOne = bcrypt.hashSync(process.env.PASSWORD_ONE, 10) //process.env.PASSWORD_ONE funkar ej
const hashUserTwo = bcrypt.hashSync(process.env.PASSWORD_TWO, 10) //process.env.PASSWORD_TWO funkar ej

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/dbfile.sqlite'
})

User.sync()
.then(() => {
    return User.bulkCreate([
        {
            username: 'Alex',
            user_email: "hgkls@al.se",
            password_hash: hashUserOne,
            user_email: "hgkls@al.se",
            role: 'admin',
        },
        {
            username: 'Ksenia',
            user_email: "hgkls@ks.se",
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
            title: "Alex TASK",
            message: 'Alex test',
            images: 'Test image här',
        },
        {
            title: "Ksenias TASK",
            message: 'Ksenias test message',
            images: 'Test image här',
        }
    ])
}, {sequelize})