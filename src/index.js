const path = require("path");

const express = require("express");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;
const db = require("./config/db");
const route = require("./routes");
//http logger
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//import config/db/index.js

//connect db
db.connectDB();

    //template
app.engine(
      "hbs",
      handlebars({
        extname: ".hbs",
      }));
 app.set("view engine", "hbs");
    app.set("views", path.join(__dirname, "resources","views"));
  //route
route(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });
