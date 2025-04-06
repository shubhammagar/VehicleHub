module.exports = (sequelize, DataTypes) => {
    const Vehicle = sequelize.define('Vehicle', {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
      variants: DataTypes.JSONB

    });
  
    return Vehicle;
  };