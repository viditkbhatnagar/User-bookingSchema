module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      user_id:{
        type:DataTypes.STRING,
        primaryKey:true,  
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [["male", "female"]],
            msg: "Please select from male or female",
          },
        },
      },
      password:{
        type: DataTypes.STRING,
        allowNull:false
      },
      isAdmin:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isIn:{
            args:[["true","false"]],
            msg: "You are not an admin"
          }
        }
      }
    },
    {
       updatedAt:false,
       createdAt:false
    }
  );
  return Users;
};
