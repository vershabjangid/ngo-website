const homebannerslidesmodel = require("../model/HomeBannerModal")
const fs = require('fs')
let path = require('path')
let finalpath = path.join(__dirname, '../../../uploads')
exports.addhomebanner = async (req, res) => {
    try {
        if (req.files[0] !== undefined) {
            if (req.files[0].filename.includes('.fake')) {
                fs.unlinkSync(`${finalpath}/${req.files[0].filename}`)
            }
            else {
                let data = {
                    Home_Banner_Heading: req.body.Home_Banner_Heading,
                    Home_Banner_Description: req.body.Home_Banner_Description,
                    Home_Banner_Image: req.files[0].filename
                }

                let insertdata = await homebannerslidesmodel(data)
                insertdata.save()
                    .then(() => {
                        res.send({
                            Status: 1,
                            Message: "Data Inserted Successfully"
                        })
                    })
                    .catch((error) => {
                        if (req.files[0] === undefined) {
                            if (error.code === 11000) {
                                res.send({
                                    Status: 0,
                                    Message: "Data Already Exists"
                                })
                            }
                            else {
                                res.send({
                                    Status: 0,
                                    Message: "Data Missing"
                                })
                            }
                        }
                        else {
                            if (error.code === 11000) {
                                res.send({
                                    Status: 0,
                                    Message: "Data Already Exists"
                                })
                            }
                            else {
                                res.send({
                                    Status: 0,
                                    Message: "Data Missing"
                                })
                            }
                            fs.unlinkSync(`${finalpath}/${req.files[0].filename}`)
                        }
                    })
            }
        }
        else {
            if (req.files[0] === undefined) {
                res.send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
            else {
                fs.unlinkSync(`${finalpath}/${req.files[0].filename}`)
                res.send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
        }

    }
    catch (error) {
        if (req.files[0] === undefined) {
            res.send({
                Status: 0,
                Message: "Something went wrong"
            })
        }
        else {
            fs.unlinkSync(`${finalpath}/${req.files[0].filename}`)
            res.send({
                Status: 0,
                Message: "Something went wrong"
            })
        }

    }
}