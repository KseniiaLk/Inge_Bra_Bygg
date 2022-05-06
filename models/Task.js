const { Sequelize, Model, DataTypes } = require('sequelize')

class Task extends Model{}

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/dbfile.sqlite'
})

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
    message: DataTypes.TEXT,
    images: DataTypes.TEXT // Detta måste fixas, bild istället för text
}, { sequelize} )

module.exports = Task


