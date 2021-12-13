const User = require('../models/User');
const CryptoJS = require("crypto-js");
const PASS_SEC = 'hung'
class homeController {
    //getsite 
    async home(req, res) {
        res.render('home')
    }
//REGISTER
    //GET DANG KI home
    homeregistration(req, res) {
        res.render("registration")
    }
     //POST create user
     async createUser(req, res) {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password : req.body.password
        });
        newUser
            .save()
            .then(() => {
             res.json(newUser);
            })
            .catch(err => {
                res.send("that bai" + err);
            });
        }

//LOGIN
    // GET login home
        async homelogin(req, res) {
            res.render('login')
        }
        
        async checklogin(req, res, next){
            const user = await User.findOne({
                username: req.body.username,
                password: req.body.password
            })
            .then(data => {
                if(data){
                    res.json(data)
                }}
                )
                .catch(err => {
                    res.send("that bai " + err);
                });          
               }
}
module.exports = new homeController()
