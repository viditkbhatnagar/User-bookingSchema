module.exports = (sequelize,DataTypes)=>{
    const Booking_Coupon = sequelize.define("booking_coupon",{
        // booking_id: DataTypes.INTEGER,
        // coupon_id: DataTypes.INTEGER
    },{
        timestamps:false
    });
    return Booking_Coupon;
}