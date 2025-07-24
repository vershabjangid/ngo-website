let express = require('express')
const { adminlogin } = require('../../../admin/controller/AuthController')
let adminroutes = express.Router()
let multer = require('multer')
let path = require('path')
const { addhomebanner } = require('../../../admin/controller/HomeController')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
            const uniquesuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            const extension = path.extname(file.originalname);
            const filename = 'file' + uniquesuffix + extension;
            cb(null, filename)
        }
        else {
            const uniquesuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            const filename = 'file' + uniquesuffix + ".fake";
            cb(null, filename)
        }
    }
})


const upload = multer({ storage: storage }).any(['Home_Banner_Image'])



adminroutes.post('/admin-login', adminlogin)


adminroutes.post('/add-home-banner', upload, addhomebanner)

module.exports = adminroutes