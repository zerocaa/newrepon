const User = require('../models/User');
const CryptoJS = require("crypto-js");
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
            password : CryptoJS.SHA256(req.body.password).toString()
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
        async postlogin(req, res)  {
            try {
                const user = await User.findOne({ username: req.body.username });
                !user && res.status(400).send('Invalid email or password');
                const hashedPassword = CryptoJS.AES.encrypt(user.password);
                const password = hashedPassword.toString(CryptoJS.enc.Utf8);
                password !== req.body.password && res.status(400).send('Invalid email or password');
                res.status(200).send(user);
            }
            catch (err) {
                res.status(400).send(err);
            }
        };
}
module.exports = new homeController()
