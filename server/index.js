let express = require('express')
let app = express();
let mongoose = require('mongoose')
let cors = require('cors')
let cookieParser = require('cookie-parser');
const adminroutes = require('./app/web/routes/admin/Auth');
let expresssession = require('express-session')



app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static('uploads'));

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

// let websitesession = expresssession({
//     name: "websitesession",
//     secret: process.env.WEBSESSIONTOKEN,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         httpOnly: true,  // Prevent JS access
//         secure: false,   // Set to `true` in production (HTTPS)
//         sameSite: 'lax', // Ensures cookies are sent correctly
//         maxAge: 2 * 60 * 60 * 1000  // 60 minute
//     }
// })



let adminsession = expresssession({
    name: "adminsession",
    secret: process.env.ADMINSESSIONTOKEN,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,  // Prevent JS access
        secure: false,   // Set to `true` in production (HTTPS)
        sameSite: 'lax', // Ensures cookies are sent correctly
        maxAge: 2 * 60 * 60 * 1000  // 60 minute
    }
})


app.use('/admin', adminsession, adminroutes)

mongoose.connect('mongodb://localhost:27017/rcmicci')
    .then(() => {
        app.listen('5500')
    })
    .catch((error) => {
        console.log("Connect Disconnected")
    })