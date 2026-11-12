'use strict';
const {
  Model,
  UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
          defaultValue: UUIDV4
          },
          productName: {
            type: DataTypes.STRING,
           allowNull: false
          },
          price: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          stock: {
            type:DataTypes.INTEGER,
            allowNull: false
          },
          productImage: {
            type:DataTypes.STRING,
            allowNull: false
          },
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE
          },
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
          }
  }, {
    sequelize,
    modelName: 'product',
    timestamps: true,
  });
  return product;
};