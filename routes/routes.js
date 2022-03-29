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
const {authHandler,adminAccess, adminCheck, authorization} = require('./authRoutes');
const path = require('path');
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, "spiderman", {
        expiresIn: maxAge,
    });
};



app.get("/",(res,resp) => {
    resp.sendFile(path.join(__dirname+ './../loginPage/login.html'))
});

app.get('/getAllUser',authorization,userCtrl.getAllUser);
app.get("/getAllBookings", userCtrl.getAllBookings);
app.get("/getAllFoodOrders",userCtrl.getAllFoodOrders);
app.get("/getAllCoupons",userCtrl.getAllCoupons);
app.get("/crud",userCtrl.crudOperation)
app.get("/query", userCtrl.queryData)
app.get("/finder",userCtrl.finderData);
app.get("/setter-getter",userCtrl.setterGetter);
app.get("/validation",userCtrl.validationCont);
app.get("/raw-query",userCtrl.rawQuery);
app.get("/oneToOne",userCtrl.oneToOne);
app.get("/belongsTo",userCtrl.belongsTo);
app.get("/oneToMany",userCtrl.oneToMany);
app.get("/manyToMany",userCtrl.manyToMany)
//user food orders
app.get("/userFoodOrders",userCtrl.userFoodOrders);
//user bookings
app.get("/userBookings",userCtrl.userBookings);
//coupons associated with orders
app.get("/foodOrderCoupons",userCtrl.foodOrderCoupons);
// coupons associated with bookings
app.get("/bookingCoupons",userCtrl.bookingCoupons);
//get all food orders of user
app.get("/:user_id/allFoodOrders", userCtrl.userAllFoodOrders);
//get all user bookings
app.get("/:user_id/allBookings",userCtrl.userAllBookings);
//get all coupons associated with particular food item
app.get("/:food_id/allCoupons",userCtrl.foodAllCoupons);
//get all coupons associated with particular order id
app.get("/:booking_id/bookingAllCoupons",userCtrl.bookAllCoupons);
// get top 5 users
app.get("/getTopFiveUsers",userCtrl.getTopFiveUSer);
//update user details
app.put("/:user_email/updateUserDetails",userCtrl.updateUserDetails);


//POST REQUESTS

//add User

app.post("/addUser",userCtrl.addUser);
//add Bookings
app.post("/addBooking",userCtrl.addBooking);
//add Food Orders
app.post("/addFoodOrders",userCtrl.addFoodOrders);
//add coupons
app.post("/addCoupons",userCtrl.addCoupons)
//checkuseradmin
app.post("/signin",userCtrl.userSignIn);


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})



//Midleware

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  
  }


module.exports = app;