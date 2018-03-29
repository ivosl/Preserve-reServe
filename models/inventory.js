'use strict';

module.exports = function(sequelize, DataTypes) {
  var Inventory = sequelize.define("Inventory", {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,100]
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    expiration: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    ///addition
    username: {
      type: DataTypes.TEXT
    },
    usertype: {
      type: DataTypes.ENUM('grocery', 'pantry'),
      defaultValue: 'grocery'
    },

});

/*   inventory.associate = function (models){ //this will create a foreign key

    models.inventory.belongsTo(models.stores,{
      onDelete: "CASCADE", //deletes everything that depends on this foreign key
      foreignKey: {
        allowNull: false
      }
    });

  }; */


  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
  //http://docs.sequelizejs.com/manual/tutorial/associations.html
  return Inventory;
};
