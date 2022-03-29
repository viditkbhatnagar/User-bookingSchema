
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define(
    "bookings", 
    {
      booking_id:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true,  
      },
      name:DataTypes.STRING,
    },
    {
        createdAt: false,
        updatedAt: false
    });
    return Bookings;
};
