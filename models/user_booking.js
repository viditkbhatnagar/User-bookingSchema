module.exports = (sequelize,DataTypes)=>{
    const User_Booking = sequelize.define("user_booking",{
        // user_id: DataTypes.STRING,
        // booking_id: DataTypes.STRING
    },{
        timestamps:false
    });
    return User_Booking;
}