export default (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    user_name: {
      type: DataTypes.STRING,
      field: 'user_name'
    },
    password: {
      type: DataTypes.STRING,
      field: 'password'
    }
  }, {
    underscored: true,
    freezeTableName: true,
    modelName: 'users'
  })

  users.associate = function (models) {
    users.hasMany(models.orders, {
      foreignKey: 'users_id',
      sourceKey: 'id'
    })
  }
  return users
}