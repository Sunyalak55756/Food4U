export default (sequelize, DataTypes) => {
  var lists = sequelize.define('lists', {
    number: {
      type: DataTypes.STRING,
      field: 'number'
    },
    price: {
      type: DataTypes.STRING,
      field: 'price'
    }
  }, {
    underscored: true,
    freezeTableName: true,
    modelName: 'lists'
  })

  lists.associate = function (models) {
    lists.belongsTo(models.foods, {
      foreignKey: 'foods_id',
      sourceKey: 'id'
    })
  }
  return lists
}