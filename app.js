const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const app = require("./routes/routes")
const jwt = require('jsonwebtoken');
const { type } = require("express/lib/response");
const{authHandler, adminAccess, adminCheck} = require("./routes/authRoutes")

const options = {
    definition : {
        openapi: "3.0.0",
        components:{
            securitySchemes:{
                bearerAuth:{
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        
        info: {
            title:"Booking Schema API",
            version: "1.0.0",
            description: "A simple Express Booking Schema API"
        },
        servers: [
            {
                url: "http://localhost:8080"
            }
        ]
    },
    apis: ["./swagger/swagger.js"]
}


const specs = swaggerJsDoc(options);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs));

app.post('/api/login', (req,res)=>{
    const user = {
        user_id: 'USR1',
        name: 'admin',
        email: 'admin@celebaltech.com'
    }
    jwt.sign({user}, 'secretkey', (err,token)=>{
        res.json({
            token
        })
    });
})

