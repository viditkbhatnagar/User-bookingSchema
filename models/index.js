const {Sequelize,DataTypes} = require('sequelize');


const sequelize = new Sequelize('bookingSchema','root','',{
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
    pool:{max:5, min:0, idle:10000}
});

sequelize.authenticate()
.then(() => {
    console.log("connected");
})
.catch(err=> {
    console.log("Error",err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;




db.sequelize.sync({force:false,match:/bookingSchema$/})
.then(() => {
    console.log("Syncing");
})

db.users = require('./users')(sequelize,DataTypes);
db.bookings = require('./bookings')(sequelize,DataTypes);

db.coupons = require('./coupon')(sequelize,DataTypes);
db.foodOrders = require('./foodOrders')(sequelize,DataTypes);
db.order_coupon = require('./order_coupon')(sequelize,DataTypes);
db.user_order = require('./user_order')(sequelize,DataTypes);
db.user_booking = require('./user_booking')(sequelize,DataTypes);
db.booking_coupon = require('./booking_coupon')(sequelize,DataTypes);

//--One To One-------///
// db.users.hasOne(db.posts,{foreignKey:'user_id'});

//---One To Many-----//
// db.users.hasMany(db.posts,{foreignKey:'user_id'});
// db.posts.belongsTo(db.users, {foreignKey:'user_id'});

//----Many To Many----//
db.foodOrders.belongsToMany(db.coupons,{through:'order_coupon'});
db.coupons.belongsToMany(db.foodOrders,{through:'order_coupon'});

db.foodOrders.belongsToMany(db.users,{through:'user_order'});
db.users.belongsToMany(db.foodOrders,{through:'user_order'});

db.users.belongsToMany(db.bookings,{through:'user_booking'});
db.bookings.belongsToMany(db.users,{through:'user_booking'});

db.coupons.belongsToMany(db.bookings,{through:'booking_coupon'});
db.bookings.belongsToMany(db.coupons,{through:'booking_coupon'});


module.exports = db;