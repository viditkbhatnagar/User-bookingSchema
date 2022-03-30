const jwt = require("jsonwebtoken");
// const Users = require('./../models/users');
var db = require("../models/index");
const Users = db.sequelize.models.users;
const maxAge = 3 * 24 * 60 * 60;
var userCtrl = require("./../controllers/userController");
const createToken = (id) => {
  return jwt.sign({ id }, "spiderman", {
    expiresIn: maxAge,
  });
};

module.exports.authHandler = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];

      const user = jwt.verify(token, "spiderman");
      if (token) {
        console.log(user);
      } else {
        res.status(400).json({ error: "Invalid Token" });
      }
    } else {
      return res.status(400).json({ message: "Authorization Required" });
    }
    next();
  } catch (error) {
    res.status(400).json({
      data: "Token Malfomed",
    });
  }
};

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
      let token = createToken(findUser.email);
      console.log(token);

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

module.exports.adminAccess = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      console.log(userSignIn);
      const token = req.headers.authorization.split(" ")[1];
      console.log("TOKEN------------------->", token);
      // console.log(userCtrl.userSignIn);
      // const user = jwt.verify(token);
      // console.log(user);
      if (token == "vb") {
        var checkRole = await Users.findOne({
          isAdmin: "true",
        });

        console.log("in checkrole");
        console.log(checkRole);
        if (checkRole) {
          console.log("Checkrole works");
        } else {
          res.status(400).json({
            error: "Access Denied. Only Admin can access it",
          });
          next();
        }
      } else {
        res.status(400).json({ error: "Invalid Token" });
      }
    } else {
      return res.status(400).json({ message: "Authorization Required" });
    }
    next();
  } catch (error) {
    res.status(400).json({
      data: "Token Malfomed",
      message: "erorr",
    });
  }
};

module.exports.adminCheck = async (req, res, next) => {
  const checkRole = await Users.findOne({
    where: {
      isAdmin: ["true", "false"],
    },
  });
  console.log(checkRole);
  let token = createToken(checkRole.isAdmin);
  console.log(token);
  if (checkRole.isAdmin == "true") {
    next();
  } else {
    next();
  }
};


module.exports.authorization = async (req, res, next) => {
  if(req.headers.authorization){}
  const token = req.cookies.access_token;
  console.log("Cookies access token---------->",req.cookies.access_token);
  if (!token) {
    console.log("INSIDE IF")
    return res.sendStatus(403);
  }
  try {
    const checkRole = await Users.findOne({
      where: {
        isAdmin: [ "true","false"],
      },
    });
    console.log(checkRole);
    if (checkRole.isAdmin == "true") {
      next();

    } 
    else {
      return res.sendStatus(403);
    }
  } catch {
    console.log("INSIDE CATCH");
    return res.sendStatus(403);
  }
};


module.exports.authorizationJwt = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      console.log(userSignIn);
      const token = req.cookies.access_token;
      console.log("TOKEN------------------->", token);
      console.log("Cookies aceess token--------->", req.cookies.access_token);
      if (token == req.cookies.access_token) {
        var checkRole = await Users.findOne({
          isAdmin: "true",
        });

        console.log("in checkrole");
        console.log(checkRole);
        if (checkRole) {
          console.log("Checkrole works");
        } else {
          res.status(400).json({
            error: "Access Denied. Only Admin can access it",
          });
          next();
        }
      } else {
        res.status(400).json({ error: "Invalid Token" });
      }
    } else {
      return res.status(400).json({ message: "Authorization Required" });
    }
    next();
  } catch (error) {
    res.status(400).json({
      data: "Token Malfomed",
      message: "erorr",
    });
  }
};



