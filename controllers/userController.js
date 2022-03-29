// const { Sequelize } = require('../models/index');
var db = require("../models/index");

const Users = db.sequelize.models.users;
const Bookings = db.sequelize.models.bookings;
const Coupons = db.sequelize.models.coupons;
const FoodOrders = db.sequelize.models.foodOrders;
// const Posts = db.sequelize.models.posts;
// const Tags = db.sequelize.models.tags;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Sequelize, Op, QueryTypes, STRING, INTEGER } = require("sequelize");
const res = require("express/lib/response");
const { add } = require("nodemon/lib/rules");
const { sequelize, foodOrders } = require("../models/index");
const { cookie } = require("express/lib/response");
const cookieParser = require("cookie-parser");
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "MyNameisVishal", {
    expiresIn: maxAge,
  });
};
//GET REQUESTS

//get all user
var getAllUser = async (req, resp) => {
  let data = await Users.findAll({});
  let response = {
    response: data,
  };
  resp.status(200).json(response);
};

//get all bookings
var getAllBookings = async (req, resp) => {
  let data = await Bookings.findAll({});
  let response = {
    response: data,
  };
  resp.status(200).json(response);
};

//get all food orders
var getAllFoodOrders = async (req, resp) => {
  let data = await FoodOrders.findAll({});
  let response = {
    response: data,
  };
  resp.status(200).json(response);
};

var getAllCoupons = async (req, resp) => {
  let data = await Coupons.findAll({});
  let response = {
    response: data,
  };
  resp.status(200).json(response);
};

var crudOperation = async (req, resp) => {
  //insert
  // let data = await Users.create({name:'demolast', email:'demo1@gmail.com',gender:'male'})
  // console.log(data.id);
  //update
  // let data = await Users.update({name:'final',email:"final@gmail.com"},{
  //     where:{
  //         id:21
  //     }
  // });
  //delete
  // let data = await Users.destroy({
  //      where:{
  //          id:21
  //      }
  //  })
  // let response = {
  //     data: 'Crud working Fine'
  // }
  // resp.status(200).json(response);
  //truncate
  // let data = await Users.destroy({
  //     truncate:true
  // })
  // console.log("Data Truncated Successfully")
  //bulk data insert
  // let data = await Users.bulkCreate([
  //     {name:'final1',email:"final1@gmail.com"},
  //     {name:'final2',email:"final2@gmail.com"},
  //     {name:'final3',email:"final3@gmail.com"},
  //     {name:'final4',email:"final4@gmail.com"},
  //     {name:'final5',email:"final5@gmail.com"}
  // ])
  //find
  // let data = await Users.findAll({})
  // let response = {
  //     data: data
  // }
  // resp.status(200).json(response);
  //send only specific fileds
  // let data = await Users.create({name:'demolast', email:'demo1@gmail.com',gender:'male'},{
  //     fields:['email','gender']
  // })
  // let response = {
  //     data: "Inside QueryData"
  // }
  // resp.status(200).json(response);
};

var queryData = async (req, resp) => {
  //select
  // let data = await Users.findAll({
  //     attributes:[
  //         'name',
  //         ['email','emailID'],
  //         'gender',
  //         [Sequelize.fn('Count',Sequelize.col('email')),'emailCount'],
  //         [Sequelize.fn('CONCAT',Sequelize.col('email'),'testvidit'),'emailCount']
  //     ]
  // });
  //include and exclude
  // let data = await Users.findAll({
  //     attributes:{exclude:['createdAt','updatedAt'],
  //     include:[
  //         [Sequelize.fn('CONCAT',Sequelize.col('name'),' Parker'),'fullname']
  // ]
  // }
  // });
  //conditions
  //  let data = await Users.findAll({
  //     where:{
  //         // id:2
  //         id:{
  //             [Op.gt]:3
  //         },
  //         email:{
  //             [Op.like]:'%@gmail.com%'
  //         }
  //     },
  //     order:[
  //         ['name','DESC'],
  //         ['email','DESC']
  //     ],
  //     group:['email'],
  //     limit:2,
  //     offset:1
  // });
  // let response = {
  //     data: data
  // }
  // resp.status(200).json(response)
};

var finderData = async (req, resp) => {
  // let data = await Users.findAll({})
  // let data = await Users.findOne({})
  // let data = await Users.findByPk(4)
  // let data = await Users.findAndCountAll({
  //     where:{
  //         email:'demo1@gmail.com'
  //     }
  // })
  // let [data,created] = await Users.findOrCreate({
  //     where:{
  //         name:'dummy'
  //     },
  //     defaults:{
  //             email:'dummyvb@gmail.com',
  //             gender:'male'
  //     }
  // })
  // let response = {
  //     data:data,
  //     add:created
  // }
  // resp.status(200).json(response);
};

var setterGetter = async (req, resp) => {
  //let data = await Users.create({name:'Peter',email:'greengoblin',gender:'male'})
  let data = await Users.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  let response = {
    data: data,
  };
  resp.status(200).json(response);
};

var validationCont = async (req, resp) => {
  // try{
  //     let data = await Users.create({name:'Peter',email:'sandman',gender:'males'})
  // }catch(e){
  //     // console.log(e);
  //     const messages = {}
  //     e.errors.forEach((error=>{
  //         let message;
  //         //console.log(error);
  //         // console.log(error.validatorKey);
  //         switch (error.validatorKey){
  //             case 'not_unique':
  //                 message = "Duplicate Email";
  //                 break;
  //             case 'isIn':
  //                 console.log(error.message);
  //                 message = error.message
  //                 break;
  //             case 'equals':
  //                 // console.log(error.message);
  //                 message = error.message
  //                 break;
  //         }
  //         messages[error.path]= message;
  //         console.log(messages);
  //     }))
  // }
  // let response = {
  //     data:'validation'
  // }
  // resp.status(200).json(response);
};

var rawQuery = async (req, resp) => {
  // const users = await db.sequelize.query("Select * from users where gender = $gender ",{
  //     type:QueryTypes.SELECT,
  //model:Users,
  //mapToModel:true,
  //raw:true,
  //replacements:{gender:'male'}, //gender =:gender
  //replacements:['male'] // ?,
  //replacements:{gender:['male','female']}  //gender IN(:gender),
  //replacements:{searchEmail: 'sandman'}  //email LIKE :searchEmail,
  //     bind:{gender:'male'}
  // })
  let response = {
    data: "raw query",
    record: users,
  };
  resp.status(200).json(response);
};

var oneToOne = async (req, resp) => {
  //   let data = await Users.findAll({
  //     include: [
  //       {
  //         model: Posts,
  //         attributes: ["name", "title", "user_id"],
  //       },
  //     ],
  //     attributes: ["name", "email"],
  //     where: {
  //       id: 4,
  //     },
  //   });
  resp.status(200).json(data);
};

var belongsTo = async (req, resp) => {
  let data = await Posts.findAll({
    include: [
      {
        model: Users,
        attributes: ["name", "email"],
      },
    ],
    attributes: ["user_id", "title", "name"],
  });
  resp.status(200).json(data);
};

var oneToMany = async (req, resp) => {
  let data = await Users.findAll({
    include: [
      {
        model: Posts,
        attributes: ["name", "title", "user_id"],
      },
    ],
    attributes: ["name", "email"],
    where: {
      id: 4,
    },
  });
  resp.status(200).json(data);
};

var manyToMany = async (req, resp) => {
  let data = await Users.findAll({
    attributes: ["name"],
    include: [
      {
        model: FoodOrders,
      },
    ],
  });

  resp.status(200).json(data);
};

//user food orders
var userFoodOrders = async (req, resp) => {
  let data = await Users.findAll({
    attributes: ["user_id", "name"],
    include: [
      {
        model: FoodOrders,
      },
    ],
  });
  resp.status(200).json(data);
};

//user bookings
var userBookings = async (req, resp) => {
  let data = await Users.findAll({
    attributes: ["name"],
    include: [
      {
        model: Bookings,
      },
    ],
  });
  resp.status(200).json(data);
};

//coupons associated with food orders
var foodOrderCoupons = async (req, resp) => {
  let data = await FoodOrders.findAll({
    attributes: ["name"],
    include: [
      {
        model: Coupons,
      },
    ],
  });
  resp.status(200).json(data);
};

//coupons associated with bookings
var bookingCoupons = async (req, resp) => {
  let data = await Bookings.findAll({
    attributes: ["name"],
    include: [
      {
        model: Coupons,
      },
    ],
  });
  resp.status(200).json(data);
};

//get particular user all food orders
var userAllFoodOrders = async (req, resp) => {
  const { user_id } = req.params;
  const getUserDetails = await db.users.findOne({
    where: {
      user_id: user_id,
    },
  });
  console.log(user_id);
  let allData = await db.users.findAll({
    where: {
      user_id: user_id,
    },
    include: [
      {
        model: FoodOrders,
      },
    ],
  });
  if (allData) {
    resp.status(200).json(allData);
  } else {
    resp.status(400).json({
      error: `No Foodorders found with ${user_id}`,
    });
  }
};

//get particular user bookings
var userAllBookings = async (req, resp) => {
  const { user_id } = req.params;
  const getUserBookings = await db.users.findOne({
    where: {
      user_id: user_id,
    },
  });
  console.log(user_id);
  let allData = await db.users.findAll({
    where: {
      user_id: user_id,
    },
    include: [
      {
        model: Bookings,
      },
    ],
  });
  if (allData) {
    resp.status(200).json(allData);
  } else {
    resp.status(400).json({
      error: `No Foodorders found with ${user_id}`,
    });
  }
};

//get particular food items with coupons
var foodAllCoupons = async (req, resp) => {
  const { food_id } = req.params;
  const getFoodCoupons = await db.foodOrders.findOne({
    where: {
      food_id: food_id,
    },
  });
  console.log(food_id);
  let allData = await db.foodOrders.findAll({
    where: {
      food_id: food_id,
    },
    include: [
      {
        model: Coupons,
      },
    ],
  });
  if (allData) {
    resp.status(200).json(allData);
  } else {
    resp.status(400).json({
      error: `No Foodorders found with ${food_id}`,
    });
  }
};

//get particular bookings with coupons
var bookAllCoupons = async (req, resp) => {
  const { booking_id } = req.params;
  const getUserBookings = await db.bookings.findOne({
    where: {
      booking_id: booking_id,
    },
  });
  console.log(booking_id);
  let allData = await db.bookings.findAll({
    where: {
      booking_id: booking_id,
    },
    include: [
      {
        model: Coupons,
      },
    ],
  });
  if (allData) {
    resp.status(200).json(allData);
  } else {
    resp.status(400).json({
      error: `No Foodorders found with ${user_id}`,
    });
  }
};

//get top five users
var getTopFiveUSer = async (req, resp) => {
  let data = await Users.findAll({
    attributes: ["user_id", "name"],
    limit: 5,
  });
  resp.status(200).json(data);
};

//Put REQUESTS
var updateUserDetails = async (req, resp) => {
  try {
    const { user_email } = req.params;
    console.log(user_email);
    const validateUserDetails = await db.users.findOne({
      where: {
        email: user_email,
      },
    });
    if (validateUserDetails) {
      const update = {};
      for (const key in req.body) {
        update[key] = req.body[key];
      }

      await validateUserDetails.update(update);
      // await validateUserDetails.save();
      // await validateUserDetails.reload();

      res.status(200).json({
        msg: "User Details Updated Successfully",
      });
    } else {
      res.status(400).json({
        error: `User with ${user_email} not found`,
      });
    }
  } catch (error) {
    resp.status(400).json({
      error: error.message,
    });
  }
};

//POST REQUESTS

var addUser = async (req, resp) => {
  const checkUserExist = await db.users.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!checkUserExist) {
    let newId;
    const prevUser = await db.users.findOne({
      order: [["user_id", "DESC"]],
    });
    if (prevUser) {
      const prevUserId = parseInt(prevUser.user_id.replace("USR", ""));
      newId = `USR${prevUserId + 1}`;
    } else {
      newId = "USR1";
    }
    const { name, email, gender, password, isAdmin } = req.body;

    let hashPassword = await bcrypt.hash(password, 6);
    console.log(hashPassword);

    const newUser = await db.users.create({
      user_id: newId,
      name,
      email,
      gender,
      password: hashPassword,
      isAdmin,
    });

    if (newUser) {
      resp.status(200).json({
        msg: `New User Added Successfully`,
      });
    }
  } else {
    resp.status(400).json({
      msg: "User Already Exist",
    });
  }
};

//authentication route
var userSignIn = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await db.users.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  console.log(findUser);

  if (findUser) {
    console.log("Inside Find User");
    let decryptPassword = await bcrypt.compare(password, findUser.password);
    console.log(password);
    console.log(findUser.password);

    if (password == findUser.password) {
      console.log("decrypting");
      const token = jwt.sign({ id: 7, role: "captain" }, "spiderman");
      console.log(token);
      return res
        .cookie("access_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .json({ message: "Logged in successfully 😊 👌",token });
      // let token = createToken(findUser.email);
      // res.cookie(token, {httpOnly:true});
      // console.log(cookie);
      

      res.status(200).json({
        message: "Login Successfull",
        token,
      });
    } else {
      res.json({
        data: "Please enter correct password",
      });
    }
  } else {
    res.json({
      data: "User Not Found",
    });
  }
};

//add Booking
var addBooking = async (req, resp) => {
  const checkBookingExist = await db.bookings.findOne({
    where: {
      name: req.body.name,
    },
  });
  if (!checkBookingExist) {
    let newId;
    const prevBooking = await db.bookings.findOne({
      order: [["booking_id", "DESC"]],
    });
    if (prevBooking) {
      const prevBookingId = parseInt(
        prevBooking.booking_id.replace("BOOK", "")
      );
      newId = `BOOK${prevBookingId + 1}`;
    } else {
      newId = "BOOK1";
    }
    const { name } = req.body;

    const newBooking = await db.bookings.create({
      booking_id: newId,
      name,
    });
    resp.status(200).json({
      msg: `New Booking Successfully`,
    });
  } else {
    resp.status(400).json({
      msg: "Booking Already Exist",
    });
  }
};

//add Food Orders
var addFoodOrders = async (req, resp) => {
  const checkFoodOrderExist = await db.foodOrders.findOne({
    where: {
      name: req.body.name,
    },
  });
  if (!checkFoodOrderExist) {
    let newId;
    const prevFoodOrder = await db.foodOrders.findOne({
      order: [["food_id", "DESC"]],
    });
    if (prevFoodOrder) {
      const prevFoodOrderId = parseInt(
        prevFoodOrder.food_id.replace("FOOD", "")
      );
      newId = `FOOD${prevFoodOrderId + 1}`;
    } else {
      newId = "FOOD1";
    }
    const { name } = req.body;

    const newFoodOrder = await db.foodOrders.create({
      food_id: newId,
      name,
    });
    resp.status(200).json({
      msg: `New Food Added Successfully`,
    });
  } else {
    resp.status(400).json({
      msg: "THis Dish Already is in Menu",
    });
  }
};

//add Coupons
var addCoupons = async (req, resp) => {
  const checkCouponExist = await db.coupons.findOne({
    where: {
      name: req.body.name,
    },
  });
  if (!checkCouponExist) {
    let newId;
    const prevCoupon = await db.coupons.findOne({
      order: [["coupon_id", "DESC"]],
    });
    if (prevCoupon) {
      const prevCouponId = parseInt(prevCoupon.coupon_id.replace("COUP", ""));
      newId = `COUP${prevCouponId + 1}`;
    } else {
      newId = "COUP1";
    }
    const { name } = req.body;

    const newCoupon = await db.coupons.create({
      coupon_id: newId,
      name,
    });
    resp.status(200).json({
      msg: `New Coupon Added Successfully`,
    });
  } else {
    resp.status(400).json({
      msg: "Coupon Already Exist",
    });
  }
};

module.exports = {
  addUser,
  crudOperation,
  queryData,
  finderData,
  setterGetter,
  validationCont,
  rawQuery,
  oneToOne,
  belongsTo,
  oneToMany,
  manyToMany,
  getAllUser,
  userFoodOrders,
  userBookings,
  foodOrderCoupons,
  bookingCoupons,
  addBooking,
  addFoodOrders,
  addCoupons,
  userAllFoodOrders,
  userAllBookings,
  foodAllCoupons,
  bookAllCoupons,
  getTopFiveUSer,
  updateUserDetails,
  getAllBookings,
  getAllFoodOrders,
  getAllCoupons,
  userSignIn,
};
