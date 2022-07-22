module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING,
        notNull: true,
        is: /^[a-zA-Z0-9\._]{4, 32}$/,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        notNull: true,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        notNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
  return User;
};
