const sell = require('../models/Product');
class ListLikeController {
    //get /news
    index(req, res) {
       sell.find({}, function (err,sells){
           if(!err) {
            res.json(sells);
        }
         else {
           res.status(500).json({error: err});
         }
       });
    }
}
module.exports = new ListLikeController()
