const Model = (sequelize, DataTypes) => {
  const Kategori = sequelize.define(
    "Kategori",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(11),
      },
      name: {
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
      tableName: "kategori",
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

  Kategori.associate = function (models) {
    Kategori.hasMany(models.Barang, {
      foreignKey: "kategoriId",
      as: "barang",
      sourceKey: "id",
    });
  };

  return Kategori;
};

export default Model;
