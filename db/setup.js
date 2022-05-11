const { User, Task, Message } = require('../models')

async function setup(){
    await User.sync({force: true})
    await Task.sync({force: true})
    await Message.sync({force: true})
}

setup()