const express = require("express");
const app = express();
var userCtrl = require('./../controllers/userController');
const cookieParser = require("cookie-parser");
const port = 8080;
require('./../models/index');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var jwt = require('jwt-simple');
const {authHandler,adminAccess, adminCheck, authorization, authorizationJwt} = require('./authRoutes');
const path = require('path');
const maxAge = 3 * 24 * 60 * 60;
// const createToken = (id) => {
//     return jwt.sign({ id }, "spiderman", {
//         expiresIn: maxAge,
//     });
// };



app.get("/",(res,resp) => {
    resp.sendFile(path.join(__dirname+ './../loginPage/login.html'))
});

app.get('/getAllUser',authorizationJwt,userCtrl.getAllUser);
app.get("/getAllBookings", authorizationJwt,userCtrl.getAllBookings);
app.get("/getAllFoodOrders",authorizationJwt,userCtrl.getAllFoodOrders);
app.get("/getAllCoupons",authorizationJwt,userCtrl.getAllCoupons);
app.get("/crud",authorizationJwt,userCtrl.crudOperation)
app.get("/query", authorizationJwt,userCtrl.queryData)
app.get("/finder",authorizationJwt,userCtrl.finderData);
app.get("/setter-getter",authorizationJwt,userCtrl.setterGetter);
app.get("/validation",authorizationJwt,userCtrl.validationCont);
app.get("/raw-query",authorizationJwt,userCtrl.rawQuery);
app.get("/oneToOne",authorizationJwt,userCtrl.oneToOne);
app.get("/belongsTo",authorizationJwt,userCtrl.belongsTo);
app.get("/oneToMany",authorizationJwt,userCtrl.oneToMany);
app.get("/manyToMany",authorizationJwt,userCtrl.manyToMany)
//user food orders
app.get("/userFoodOrders",authorizationJwt,userCtrl.userFoodOrders);
//user bookings
app.get("/userBookings",authorizationJwt,userCtrl.userBookings);
//coupons associated with orders
app.get("/foodOrderCoupons",authorizationJwt,userCtrl.foodOrderCoupons);
// coupons associated with bookings
app.get("/bookingCoupons",authorizationJwt,userCtrl.bookingCoupons);
//get all food orders of user
app.get("/:user_id/allFoodOrders", authorizationJwt,userCtrl.userAllFoodOrders);
//get all user bookings
app.get("/:user_id/allBookings",authorizationJwt,userCtrl.userAllBookings);
//get all coupons associated with particular food item
app.get("/:food_id/allCoupons",authorizationJwt,userCtrl.foodAllCoupons);
//get all coupons associated with particular order id
app.get("/:booking_id/bookingAllCoupons",authorizationJwt,userCtrl.bookAllCoupons);
// get top 5 users
app.get("/getTopFiveUsers",authorizationJwt,userCtrl.getTopFiveUSer);
//update user details
app.put("/:user_email/updateUserDetails",authorizationJwt,userCtrl.updateUserDetails);


//POST REQUESTS

//add User

app.post("/addUser",authorizationJwt,userCtrl.addUser);
//add Bookings
app.post("/addBooking",authorizationJwt,userCtrl.addBooking);
//add Food Orders
app.post("/addFoodOrders",authorizationJwt,userCtrl.addFoodOrders);
//add coupons
app.post("/addCoupons",authorizationJwt,userCtrl.addCoupons)
//checkuseradmin
app.post("/signin",userCtrl.userSignIn);


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})



//Midleware


module.exports = app;