const { Sequelize, Model, DataTypes } = require('sequelize')

class Task extends Model{}

function setupTask(sequelize){
    Task.init({
        task_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: DataTypes.TEXT,
        task_status: {
            type: DataTypes.TEXT,
            enum: ["Pending", "Done"],
            defaultValue: "Pending",
            allowNull: false,
        },
    }, { sequelize} )

    return Task
}

module.exports = setupTask


