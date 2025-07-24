let dotenv = require('dotenv')
dotenv.config({ debug: false, quiet: true });
let AdminEmail = process.env.ADMINEMAIL
let AdminPassword = process.env.ADMINPASSWORD
let jwt = require('jsonwebtoken')
let adminjwttoken = process.env.ADMINJWTTOKEN


let generateadmintoken = () => {
    try {
        let newtoken;
        return jwt.sign({ newtoken }, adminjwttoken, { expiresIn: "2h" })
    }
    catch (error) {
        return ({
            Status: 0,
            Message: "Something went wrong"
        })
    }
}


exports.adminlogin = (req, res) => {
    try {
        if (req.body === undefined) {
            res.send({
                Status: 0,
                Message: "Data Missing"
            })
        }
        else {
            let data = {
                Email: req.body.Email,
                Password: req.body.Password
            }


            if (data.Email === AdminEmail && data.Password === AdminPassword) {
                req.session.user = req.body.Email,
                    res.send({
                        Status: 1,
                        Message: "Login Successfully",
                        Token: generateadmintoken()
                    })
            }
            else {
                res.send({
                    Status: 0,
                    Message: "Invalid email or password"
                })
            }
        }
    }
    catch (error) {
        res.send({
            Status: 0,
            Message: "Something went wrong"
        })
    }
}