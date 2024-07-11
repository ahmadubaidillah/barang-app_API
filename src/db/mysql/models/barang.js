const Model = (sequelize, DataTypes) => {
  const Barang = sequelize.define(
    "Barang",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(11),
      },
      kategoriId: {
        allowNull: false,
        field: "kategori_id",
        type: DataTypes.INTEGER(11),
        unique: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      harga: {
        allowNull: false,
        type: DataTypes.INTEGER(11),
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
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
      tableName: "barang",
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

  Barang.associate = function (models) {
    Barang.belongsTo(models.Kategori, {
      foreignKey: "kategoriId",
      as: "kategori",
      targetKey: "id",
    });
  };

  return Barang;
};

export default Model;
