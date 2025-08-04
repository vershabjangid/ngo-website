let express = require('express')
const { adminlogin } = require('../../../admin/controller/AuthController')
let adminroutes = express.Router()
let multer = require('multer')
let path = require('path')
const { addhomebanner, viewhomebanner, deletehomebanner, updatehomebannerslides, addhomeaboutdata, viewhomeaboutdata, updateaboutdata, addhomegoalsdata, viewhomegoalsdata, updategoalsdata, addhomemanagementdata, viewhomemanagementdata, updatemanagementdata, addhomemanagementprofiledata, viewhomemanagementprofiledata, updatehomemanagementprofiledata, deletehomemanagementprofiledata, addhomegallerydata, viewhomegallerydata, updategallerydata, addhometeammemberdata, viewhometeammemberdata, updateteammemberdata, addhometeamprofiledata, viewhometeamprofiledata, updatehometeamprofiledata, deletehometeamprofiledata, addhomedonationdata, updatedonationdata, viewhomedonationdata } = require('../../../admin/controller/HomeController')
let jwt = require('jsonwebtoken')
let dotenv = require('dotenv')
const { addhomegoalscard, viewgoalscarddata, deletehomegoalscard, updatehomegoalscard, addgoalsparagraphheading, viewgoalsparagraphheading, addgoalscardparagraph, viewgoalscardparagraph, deletegoalscardparagraph, deletegoalsparagraphheading, updategoalsparagraphheading, updategoalscardparagraph } = require('../../../admin/controller/GoalsController')
const { addhomegallery, viewhomegallery, deletehomegallery, updatehomegallery } = require('../../../admin/controller/GalleryController')
dotenv.config({ debug: false, quiet: true });

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


const upload = multer({ storage: storage }).any(['Home_Banner_Image', 'Home_About_Image', 'Home_Management_Profile_Picture', 'Home_Team_Profile_Picture', 'Home_Goals_Card_Icon'])


let verifytoken = (req, res, next) => {
    let header = req.headers['authorization']

    if (!header) {
        res.send({
            Status: 0,
            Message: "Token is required"
        })
    }
    else {
        console.log(process.env.ADMINJWTTOKEN)
        jwt.verify(header, process.env.ADMINJWTTOKEN, (err, user) => {
            if (err) {
                res.send({
                    Status: 0,
                    Message: "Invalid Token"
                })
            }
            else {
                next();
            }
        })
    }
}


let adminsession = (req, res, next) => {
    if (!req.session.user) {
        return res.send({
            Status: 0,
            Message: "Unauthorized User"
        });
    }
    next();
};

adminroutes.post('/admin-login', adminlogin)


adminroutes.post('/add-home-banner', verifytoken, adminsession, upload, addhomebanner)
adminroutes.get('/view-home-banner', viewhomebanner)
adminroutes.delete('/delete-home-banner', verifytoken, adminsession, upload, deletehomebanner)
adminroutes.put('/update-home-banner', verifytoken, adminsession, upload, updatehomebannerslides)

// home about 
adminroutes.post('/add-home-about-banner', verifytoken, adminsession, upload, addhomeaboutdata)
adminroutes.get('/view-home-about-banner', viewhomeaboutdata)
adminroutes.put('/update-home-about-banner', verifytoken, adminsession, upload, updateaboutdata)

//home goals 
adminroutes.post('/add-home-goals', verifytoken, adminsession, upload, addhomegoalsdata)
adminroutes.get('/view-home-goals', viewhomegoalsdata)
adminroutes.put('/update-home-goals', verifytoken, adminsession, upload, updategoalsdata)

//home management 
adminroutes.post('/add-home-management-body', verifytoken, adminsession, upload, addhomemanagementdata)
adminroutes.get('/view-home-management-body', viewhomemanagementdata)
adminroutes.put('/update-home-management-body', verifytoken, adminsession, upload, updatemanagementdata)

// home mangement card 
adminroutes.post('/add-home-management-card', verifytoken, adminsession, upload, addhomemanagementprofiledata)
adminroutes.get('/view-home-management-card', viewhomemanagementprofiledata)
adminroutes.put('/update-home-management-card', verifytoken, adminsession, upload, updatehomemanagementprofiledata)
adminroutes.delete('/delete-home-management-card', verifytoken, adminsession, upload, deletehomemanagementprofiledata)


//home gallery 
adminroutes.post('/add-home-gallery', verifytoken, adminsession, upload, addhomegallerydata)
adminroutes.get('/view-home-gallery', viewhomegallerydata)
adminroutes.put('/update-home-gallery', verifytoken, adminsession, upload, updategallerydata)


//home team 
adminroutes.post('/add-home-team', verifytoken, adminsession, upload, addhometeammemberdata)
adminroutes.get('/view-home-team', viewhometeammemberdata)
adminroutes.put('/update-home-team', verifytoken, adminsession, upload, updateteammemberdata)


// home team card 
adminroutes.post('/add-home-team-card', verifytoken, adminsession, upload, addhometeamprofiledata)
adminroutes.get('/view-home-team-card', viewhometeamprofiledata)
adminroutes.put('/update-home-team-card', verifytoken, adminsession, upload, updatehometeamprofiledata)
adminroutes.delete('/delete-home-team-card', verifytoken, adminsession, upload, deletehometeamprofiledata)


//home team 
adminroutes.post('/add-home-donation', verifytoken, adminsession, upload, addhomedonationdata)
adminroutes.get('/view-home-donation', viewhomedonationdata)
adminroutes.put('/update-home-donation', verifytoken, adminsession, upload, updatedonationdata)




// goals card routes 
adminroutes.post('/add-goals-card', verifytoken, adminsession, upload, addhomegoalscard)
adminroutes.get('/view-goals-card', viewgoalscarddata)
adminroutes.delete('/delete-goals-card', verifytoken, adminsession, upload, deletehomegoalscard)
adminroutes.put('/update-goals-card', verifytoken, adminsession, upload, updatehomegoalscard)


adminroutes.post('/add-goals-paragraph-heading', verifytoken, adminsession, upload, addgoalsparagraphheading)
adminroutes.get('/view-goals-paragraph-heading', viewgoalsparagraphheading)
adminroutes.delete('/delete-goals-paragraph-heading', verifytoken, adminsession, upload, deletegoalsparagraphheading)
adminroutes.put('/update-goals-paragraph-heading', verifytoken, adminsession, upload, updategoalsparagraphheading)



adminroutes.post('/add-goals-card-paragraph', verifytoken, adminsession, upload, addgoalscardparagraph)
adminroutes.get('/view-goals-card-paragraph', viewgoalscardparagraph)
adminroutes.delete('/delete-goals-card-paragraph', verifytoken, adminsession, upload, deletegoalscardparagraph)
adminroutes.put('/update-goals-card-paragraph', verifytoken, adminsession, upload, updategoalscardparagraph)

// gallery routes 
adminroutes.post('/add-gallery', verifytoken, adminsession, upload, addhomegallery)
adminroutes.get('/view-gallery', viewhomegallery)
adminroutes.delete('/delete-gallery', verifytoken, adminsession, upload, deletehomegallery)
adminroutes.put('/update-gallery', verifytoken, adminsession, upload, updatehomegallery)


module.exports = adminroutes