export default (sequelize, DataTypes) => {
  var foods = sequelize.define('foods', {
    name: {
      type: DataTypes.STRING,
      field: 'name'
    },
    price: {
      type: DataTypes.STRING,
      field: 'price'
    },
    img: {
      type: DataTypes.STRING,
      field: 'img'
    }
  }, {
    underscored: true,
    freezeTableName: true,
    modelName: 'foods'
  })

  return foods
}