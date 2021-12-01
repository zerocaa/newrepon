const newsRouter = require("./news");
function route(app)
{
    app.use("/news", newsRouter);
    app.get("/", (req, res) => {
        res.render("home");
      });
      app.get("/intro", (req, res) => {
        res.render("intro");
      });
      app.get("/contact", (req, res) => {
        res.render("contact");
      });
      app.get("/product", (req, res) => {
        res.render("product");
      });
      app.get("/login", (req, res) => {
        res.render("login");
      });
      app.get("/registration", (req, res) => {
      res.render("registration");
      });
      app.get("/cart", (req, res) => {
      res.render("cart");
      });
      app.get("/pay", (req, res) => {
      res.render("pay");
      }); 
      app.get("/listlike", (req, res) => {
      res.render("listlike");
      }); 
      app.get("/productDetail", (req, res) => {
      res.render("productDetail");
      }); 
      app.get("/accountManagement", (req, res) => {
      res.render("accountManagement");
      }); 
      app.get("/newDetail", (req, res) => {
      res.render("newDetail");
      });
    //   app.get("/news", (req, res) => {
    //     res.render("news");
    //     });
      app.get("/search", (req, res) => {
        res.render("search");
        });
      app.post("/search", (req, res) => {
        res.render("search");
        });
      
    
}

module.exports = route;