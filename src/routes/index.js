const newsRouter = require("./news");
const homeRouter = require("./home");
const productRouter = require("./product");
function route(app)
{
    app.get("/news", newsRouter);
    app.get("/product", productRouter);

    app.get("/", homeRouter);
   
    app.get("/intro", (req, res) => {
        res.render("intro");
      });
  app.get("/pay", (req, res) => {
      res.render("pay");
      }); 
    app.get("/listlike", (req, res) => {
      res.render("listlike");
      }); 
   
    app.get("/accountManagement", (req, res) => {
      res.render("accountManagement");
      }); 
    app.get("/productDetail", (req, res) => {
        res.render("productDetail");
        }); 
    app.get("/newDetail", (req, res) => {
      res.render("newDetail");
      });
    // app.get("/cart", (req, res) => {
    //     res.render("cart");
    //     });
    
}

module.exports = route;