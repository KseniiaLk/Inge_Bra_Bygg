const { Sequelize, Model, DataTypes } = require('sequelize')

class Message extends Model{}

function setupMessage(sequelize){
    Message.init({
        message_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: DataTypes.TEXT,
        message: {
            type: DataTypes.TEXT,
            enum: ["Pending", "Done"],
            defaultValue: "Pending",
            allowNull: false,
        },
       
    }, { sequelize} )

    return Message
}

module.exports = setupMessage