const { Sequelize, Model, DataTypes } = require('sequelize')

class Message extends Model{}

function setupMessage(sequelize){
    Message.init({
        message_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        task_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: "no image",
          },
       
    }, { sequelize} )

    return Message
}

module.exports = setupMessage