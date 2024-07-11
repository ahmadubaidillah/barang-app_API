const Model = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(11),
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: "created_at",
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: "updated_at",
        type: DataTypes.DATE,
      },
      deleted: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER(1),
      },
    },
    {
      tableName: "users",
      timestamps: false,
      defaultScope: {
        where: {
          deleted: 0,
        },
        attributes: { exclude: ["deleted", "type"] },
      },
      scopes: {
        all: {
          attributes: { exclude: ["deleted"] },
        },
      },
    }
  );

  Users.associate = function (models) {};

  return Users;
};

export default Model;
