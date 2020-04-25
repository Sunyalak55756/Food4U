export default (sequelize, DataTypes) => {
  var orders = sequelize.define('orders', {
    total_price: {
      type: DataTypes.DECIMAL,
      field: 'total_price'
    },
    localtion: {
      type: DataTypes.STRING,
      field: 'localtion'
    }
  }, {
    underscored: true,
    freezeTableName: true,
    modelName: 'orders'
  })

  orders.associate = function (models) {
    orders.hasMany(models.lists, {
      foreignKey: 'orders_id',
      sourceKey: 'id'
    })
  }
  return orders
}