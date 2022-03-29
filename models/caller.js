const {addNewUser} = require('./api')

const callAddNewUser = async () => {
    const data = await addNewUser({
      name: "blue",
      email: "008@gmail.com",
      gender: "male",
      orderId:"1",
      booking_Id:"2"
    });
  };

callAddNewUser();