

module.exports = (sequelize,DataTypes)=>{
    const Coupons = sequelize.define("coupons",{
        coupon_id:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true,  
          },
        name:DataTypes.STRING,
    },{
        createdAt:false,
        updatedAt:false,
    });
    return Coupons;
}