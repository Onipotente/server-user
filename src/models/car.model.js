module.exports = (sequelize, Sequelize) => {
  const Car = sequelize.define("cars",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      modelo: {
        type: Sequelize.STRING,
        notNull: true,
      },
      marca: {
        type: Sequelize.STRING,
        notNull: true,
      },
      chassi: {
        type: Sequelize.STRING,
        notNull: true,
        unique: true,
      },
      placa: {
        type: Sequelize.STRING,
        notNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
  return Car;
};
