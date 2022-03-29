module.exports = (sequelize,DataTypes)=>{
    const Order_Coupon = sequelize.define("order_coupon",{
        // orderId: DataTypes.INTEGER,
        // couponId: DataTypes.INTEGER,
    },{
        timestamps:false
    });
    return Order_Coupon;
}