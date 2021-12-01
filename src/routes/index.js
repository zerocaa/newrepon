const newsRouter = require("./news");
const homeRouter = require("./home");
const productRouter = require("./product");
const introRouter = require("./intro");
const productDetailRouter = require("./productDetail");
const payRouter = require("./pay");
const listlikeRouter = require("./listlike")
const contactRouter = require("./contact");
const accountManagementRouter = require("./accountManagement");
const newDetailRouter = require("./newDetail");
const cartRouter = require("./cart");
const loginRouter = require("./login");
const registrationRouter = require("./registration");
function route(app)
{
    app.use("/news", newsRouter);
    app.use("/product", productRouter);
    app.use("/intro", introRouter);
    app.use("/productDetail", productDetailRouter);
    app.use("/pay", payRouter);
    app.use("/listlike", listlikeRouter);
    app.use("/contact", contactRouter);
    app.use("/accountManagement", accountManagementRouter);
    app.use("/newDetail", newDetailRouter);
    app.use("/cart", cartRouter);
    app.use("/login", loginRouter);
    app.use("/registration", registrationRouter);
    app.use("/", homeRouter);
    
}

module.exports = route;