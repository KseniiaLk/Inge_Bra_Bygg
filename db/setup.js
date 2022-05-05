const { User, Task } = require('../models')

async function setup(){
    await User.sync({force: true})
    await Task.sync({force: true})
}

setup()