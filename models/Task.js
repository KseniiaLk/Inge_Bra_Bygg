const { Sequelize, Model, DataTypes } = require('sequelize')

class Task extends Model{}

function setupTask(sequelize){
    Task.init({
        task_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.TEXT,
            defaultValue: "default task",
          },
        task_status: {
            type: DataTypes.TEXT,
            enum: ["Pending", "Done"],
            defaultValue: "Pending",
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          worker_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          }
        
    }, { sequelize} )

    return Task
}

module.exports = setupTask


