const { Task, User, sequelize } = require('../models/index.js')
const bcrypt = require('bcryptjs')

require('dotenv').config({path: './config/.env'})

const hashUserOne = bcrypt.hashSync(process.env.PASSWORD_ONE, 10) //process.env.PASSWORD_ONE funkar ej
const hashUserTwo = bcrypt.hashSync(process.env.PASSWORD_TWO, 10) //process.env.PASSWORD_TWO funkar ej


sequelize.sync()
.then(async () => {
    const users = await User.bulkCreate([
        {
            username: 'Alex',
            user_email: "hgkls@al.se",
            password_hash: hashUserOne,
            user_email: "hgkls@al.se",
            role: 'admin',
        },
        {
            username: 'Kseniia',
            user_email: "hgkls@ks.se",
            password_hash: hashUserTwo,
            user_email: "hgkls@ks.se",
            role: 'admin',
        }
    ])
         Task.bulkCreate([
            {
                title: "Alex TASK",
                message: 'Alex test',
                images: 'Test image här',
                worker_id: users[0].user_id
            },
            {
                title: "Ksenias TASK",
                message: 'Ksenias test message',
                images: 'Test image här',
                worker_id: users[1].user_id
            }
        ])
}, {sequelize}).catch(console.log)

// Task.sync()
// .then(() => {
// }, {sequelize})