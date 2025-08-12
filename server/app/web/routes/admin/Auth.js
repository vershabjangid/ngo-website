let express = require('express')
const { adminlogin } = require('../../../admin/controller/AuthController')
let adminroutes = express.Router()
let multer = require('multer')
let path = require('path')
const { addhomebanner, viewhomebanner, deletehomebanner, updatehomebannerslides, addhomeaboutdata, viewhomeaboutdata, updateaboutdata, addhomegoalsdata, viewhomegoalsdata, updategoalsdata, addhomemanagementdata, viewhomemanagementdata, updatemanagementdata, addhomemanagementprofiledata, viewhomemanagementprofiledata, updatehomemanagementprofiledata, deletehomemanagementprofiledata, addhomegallerydata, viewhomegallerydata, updategallerydata, addhometeammemberdata, viewhometeammemberdata, updateteammemberdata, addhometeamprofiledata, viewhometeamprofiledata, updatehometeamprofiledata, deletehometeamprofiledata, addhomedonationdata, updatedonationdata, viewhomedonationdata } = require('../../../admin/controller/HomeController')
let jwt = require('jsonwebtoken')
let dotenv = require('dotenv')
const { addhomegoalscard, viewgoalscarddata, deletehomegoalscard, updatehomegoalscard, addgoalsparagraphheading, viewgoalsparagraphheading, addgoalscardparagraph, viewgoalscardparagraph, deletegoalscardparagraph, deletegoalsparagraphheading, updategoalsparagraphheading, updategoalscardparagraph } = require('../../../admin/controller/GoalsController')
const { addhomegallery, viewhomegallery, deletehomegallery, updatehomegallery, addgallerybannercontroller, viewgallerybannercontroller, updategallerybannercontroller } = require('../../../admin/controller/GalleryController')
const { addaboutscontroller, addaboutbannercontroller, viewaboutbannercontroller, updateaboutbannercontroller, addaboutparagraphsection, viewaboutparagraphsection, updateaboutparagraphsection, deleteaboutparagraphsection, addaboutextraparagraphcontroller, viewaboutextraparagraphcontroller, updateaboutextraparagraphcontroller, deleteaboutextraparagraphcontroller } = require('../../../admin/controller/AboutController')
const { addnewsbannercontroller, viewnewsbannercontroller, updatenewsbannercontroller, addnewscontroller, viewnewscontroller, updatenewscontroller, deletenewscontroller } = require('../../../admin/controller/NewsController')
const { addcontactbannercontroller, viewcontactbannercontroller, updatecontactbannercontroller, AddQueriescontroller, ViewQueriescontroller, deletequeries } = require('../../../admin/controller/ContactController')
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


const upload = multer({ storage: storage }).any(['Home_Banner_Image', 'Home_About_Image', 'Home_Management_Profile_Picture', 'Home_Team_Profile_Picture', 'Home_Goals_Card_Icon', 'About_Image', 'About_Banner_Image', 'Gallery_Banner_Image', 'News_Banner_Image', 'Contact_Banner_Image'])


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

adminroutes.post('/add-gallery-banner-section', verifytoken, adminsession, upload, addgallerybannercontroller)
adminroutes.get('/view-gallery-banner-section', viewgallerybannercontroller)
adminroutes.put('/update-gallery-banner-section', verifytoken, adminsession, upload, updategallerybannercontroller)






adminroutes.post('/add-about-banner-section', verifytoken, adminsession, upload, addaboutbannercontroller)
adminroutes.get('/view-about-banner-section', viewaboutbannercontroller)
adminroutes.put('/update-about-banner-section', verifytoken, adminsession, upload, updateaboutbannercontroller)

adminroutes.post('/add-about-paragraph-section', verifytoken, adminsession, upload, addaboutparagraphsection)
adminroutes.get('/view-about-paragraph-section', viewaboutparagraphsection)
adminroutes.put('/update-about-paragraph-section', verifytoken, adminsession, upload, updateaboutparagraphsection)
adminroutes.delete('/delete-about-paragraph-section', verifytoken, adminsession, upload, deleteaboutparagraphsection)

adminroutes.post('/add-about-extra-paragraph', verifytoken, adminsession, upload, addaboutextraparagraphcontroller)
adminroutes.get('/view-about-extra-paragraph', viewaboutextraparagraphcontroller)
adminroutes.put('/update-about-extra-paragraph', verifytoken, adminsession, upload, updateaboutextraparagraphcontroller)
adminroutes.delete('/delete-about-extra-paragraph', verifytoken, adminsession, upload, deleteaboutextraparagraphcontroller)

// news routes 
adminroutes.post('/add-news-banner-section', verifytoken, adminsession, upload, addnewsbannercontroller)
adminroutes.get('/view-news-banner-section', viewnewsbannercontroller)
adminroutes.put('/update-news-banner-section', verifytoken, adminsession, upload, updatenewsbannercontroller)


adminroutes.post('/add-news', verifytoken, adminsession, upload, addnewscontroller)
adminroutes.get('/view-news', viewnewscontroller)
adminroutes.put('/update-news', verifytoken, adminsession, upload, updatenewscontroller)
adminroutes.delete('/delete-news', verifytoken, adminsession, upload, deletenewscontroller)

adminroutes.post('/add-contact-banner', verifytoken, adminsession, upload, addcontactbannercontroller)
adminroutes.get('/view-contact-banner', viewcontactbannercontroller)
adminroutes.put('/update-contact-banner', verifytoken, adminsession, upload, updatecontactbannercontroller)

adminroutes.post('/send-query', upload, AddQueriescontroller)
adminroutes.get('/view-query', verifytoken, adminsession, upload, ViewQueriescontroller)
adminroutes.delete('/delete-query', verifytoken, adminsession, upload, deletequeries)

module.exports = adminroutes