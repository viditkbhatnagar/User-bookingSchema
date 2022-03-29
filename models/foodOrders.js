

module.exports = (sequelize,DataTypes)=>{
    const FoodOrders = sequelize.define("foodOrders",{
        food_id:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true,  
          },
        name:DataTypes.STRING,
    },{
        timestamps:false
    });
    return FoodOrders;
}