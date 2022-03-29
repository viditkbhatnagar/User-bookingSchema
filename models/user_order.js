module.exports = (sequelize,DataTypes)=>{
    const User_Order = sequelize.define("user_order",{
        // userId: DataTypes.INTEGER,
        // foodOrderId: DataTypes.INTEGER
    },{
        timestamps:false
    });
    return User_Order;
}