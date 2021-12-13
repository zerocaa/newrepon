const User = require('../models/User');
class RegistrationController {
    //get /news
    // registration(req, res) {
    //     res.render('registration')
    // }
     // method post for create new user
        async registration(req, res) {
            const newUser = new User(req.body);
            newUser
                .save()
                .then(() => {
                 res.json(newUser);
                })
                .catch(err => {
                    res.send("that bai")
                });
            }
}
module.exports = new RegistrationController()
