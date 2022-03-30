//Sign In Model

//USERS

/**
 * @swagger
 * components:
 *   schemas:
 *     SignIn:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: User's Email
 *         password:
 *             type: string
 *             description: User's password
 *       example:
 *         email: greengoblin@gmail.com
 *         password: $2a$06$waZf3l6.aCeLCqy9lSpQSe5SGaB2KyFGHAOrmtubDyiMCyTZGtQ3i
 */

   /**
 * @swagger
 * /signIn:
 *   post:
 *     summary: Sign In to get Authorization Token
 *     tags: [SignIn]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignIn'
 *     responses:
 *       200:
 *         description: User was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SignIn'
 *       500:
 *         description: Some server error
 */





//USERS

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - user_id
 *         - name
 *         - email
 *         - gender
 *         - password
 *         - isAdmin
 *       properties:
 *         user_id:
 *           type: string
 *           description: The auto-generated id of the Users
 *         name:
 *           type: string
 *           description: User's Name
 *         email:
 *           type: string
 *           description: User's Email
 *         gender:
 *            type: string
 *            description: User's Gender
 *         password:
 *             type: string
 *             description: User's password
 *         isAdmin:
 *             type: string
 *             description: User is admin or not
 *       example:
 *         name: Peter Parker
 *         email: peterparker@gmail.com
 *         gender: male/female
 *         password: User Password
 *         isAdmin : true/false
 */

 

 /**
 * @swagger
 * /getAllUser:
 *   get:
 *     summary: Returns the list of Users
 *     tags: [Users]
 *     security: [{
            bearerAuth: []
        }]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 */


 /**
 * @swagger
 * /userFoodOrders:
 *   get:
 *     summary: Returns the list of all food orders of users
 *     tags: [Users]
 *     security: [{
            bearerAuth: []
        }]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 */
 
  /**
 * @swagger
 * /userBookings:
 *   get:
 *     summary: Returns the list of all  bookings of users
 *     tags: [Users]
 *     security: [{
            bearerAuth: []
        }]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 */

  /**
 * @swagger
 * /{id}/allFoodOrders:
 *   get:
 *     summary: Get specific users food orders
 *     tags: [Users]
 *     security: [{
            bearerAuth: []
        }]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: USER-ID
 *     responses:
 *       200:
 *         description: FoodOrder description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: The Order was not found
 */

   /**
 * @swagger
 * /{id}/allBookings:
 *   get:
 *     summary: Get specific users bookings
 *     tags: [Users]
 *     security: [{
            bearerAuth: []
        }]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: USER-ID
 *     responses:
 *       200:
 *         description: Bookings description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: The Booking was not found
 */

     /**
 * @swagger
 * /getTopFiveUsers:
 *   get:
 *     summary: Returns the top five users
 *     tags: [Users]
 *     security: [{
            bearerAuth: []
        }]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 */

     /**
 * @swagger
 * /addUser:
 *   post:
 *     summary: Add a new user
 *     tags: [Users]
 *     security: [{
            bearerAuth: []
        }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: User was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */


//BOOKINGS

     /**
 * @swagger
 * components:
 *   schemas:
 *     Bookings:
 *       type: object
 *       required:
 *         - booking_id
 *         - name
 *       properties:
 *         booking_id:
 *           type: string
 *           description: The auto-generated id for the Bookings
 *         name:
 *           type: string
 *           description: Booking Name
 *       example:
 *         name: Booking for Raddison Hotel

 */


 /**
 * @swagger
 * /getAllBookings:
 *   get:
 *     summary: Returns the list of Bookings
 *     tags: [Bookings]
 *     security: [{
            bearerAuth: []
        }]
 *     responses:
 *       200:
 *         description: The list of all the bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bookings'
 */


 /**
 * @swagger
 * /bookingCoupons:
 *   get:
 *     summary: Returns the list of Coupons associated with bookings
 *     tags: [Bookings]
 *     security: [{
            bearerAuth: []
        }]
 *     responses:
 *       200:
 *         description: The list of all the coupons associated with bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bookings'
 */


     /**
 * @swagger
 * /addBooking:
 *   post:
 *     summary: Add a new Booking
 *     tags: [Bookings]
 *     security: [{
            bearerAuth: []
        }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bookings'
 *     responses:
 *       200:
 *         description: Booking was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bookings'
 *       500:
 *         description: Some server error
 */


        /**
 * @swagger
 * /{id}/bookingAllCoupons:
 *   get:
 *     summary: Get specific coupons associated with bookings
 *     tags: [Bookings]
 *     security: [{
            bearerAuth: []
        }]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: BOOK-ID
 *     responses:
 *       200:
 *         description: coupons associated with particular booking
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bookings'
 *       404:
 *         description: The Booking was not found
 */

//FOODORDERS

            /**
 * @swagger
 * components:
 *   schemas:
 *     FoodOrders:
 *       type: object
 *       required:
 *         - food_id
 *         - name
 *       properties:
 *         food_id:
 *           type: string
 *           description: The auto-generated id for the FoodOrders
 *         name:
 *           type: string
 *           description: Food Order Name
 *       example:
 *         name: Pizza

 */

 /**
 * @swagger
 * /getAllFoodOrders:
 *   get:
 *     summary: Returns the list of all Food Items
 *     tags: [FoodOrders]
 *     security: [{
            bearerAuth: []
        }]
 *     responses:
 *       200:
 *         description: The list of all the foodorders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FoodOrders'
 */

 /**
 * @swagger
 * /foodOrderCoupons:
 *   get:
 *     summary: Returns the list of Coupons associated with food orders
 *     tags: [FoodOrders]
 *     security: [{
            bearerAuth: []
        }]
 *     responses:
 *       200:
 *         description: The list of all the coupons associated with food items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FoodOrders'
 */

     /**
 * @swagger
 * /addFoodOrders:
 *   post:
 *     summary: Add a new Food item
 *     tags: [FoodOrders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FoodOrders'
 *     responses:
 *       200:
 *         description: FoodItem was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FoodOrders'
 *       500:
 *         description: Some server error
 */

        /**
 * @swagger
 * /{id}/allCoupons:
 *   get:
 *     summary: Get specific coupons associated with bookings
 *     tags: [FoodOrders]
 *     security: [{
            bearerAuth: []
        }]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: FOOD-ID
 *     responses:
 *       200:
 *         description: coupons associated with particular food item
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FoodOrders'
 *       404:
 *         description: The Booking was not found
 */


//Coupons

                    /**
 * @swagger
 * components:
 *   schemas:
 *     Coupons:
 *       type: object
 *       required:
 *         - coupon_id
 *         - name
 *       properties:
 *         coupon_id:
 *           type: string
 *           description: The auto-generated id for the Coupons
 *         name:
 *           type: string
 *           description: Coupon Name
 *       example:
 *         name: HDFCDEBIT

 */

 /**
 * @swagger
 * /getAllCoupons:
 *   get:
 *     summary: Returns the list of all coupons
 *     tags: [Coupons]
 *     security: [{
            bearerAuth: []
        }]
 *     responses:
 *       200:
 *         description: The list of all the coupons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Coupons'
 */

     /**
 * @swagger
 * /addCoupons:
 *   post:
 *     summary: Add a new Coupon
 *     tags: [Coupons]
 *     security: [{
            bearerAuth: []
        }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Coupons'
 *     responses:
 *       200:
 *         description: Coupon was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coupons'
 *       500:
 *         description: Some server error
 */


  