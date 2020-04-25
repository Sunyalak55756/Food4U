export default (sequelize, DataTypes) => {
  var foods = sequelize.define('foods', {
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
    modelName: 'foods'
  })

  return foods
}