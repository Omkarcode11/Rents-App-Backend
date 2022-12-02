module.exports = (sequelizeCon, DataTypes) => {
  let Rents = sequelizeCon.define('rents', {
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    BookId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  });
  return Rents;
};
