import express from 'express';
import router from './routes/index.js';
import db from "./config/db.js"

const app = express();

//conect data base
db.authenticate()
    .then( () => console.log("Data base was created"))
    .catch(err => console.log(err))

//define port
const port = process.env.PORT || 4000;

//enable PUG "view engine"
app.set("view engine", "pug");

//get actual year
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.actualDay = year.getDate();
    res.locals.actualMonth = year.getMonth();
    res.locals.siteName = "Travels Agency";

    next();
});

//add body parser to read the form data
app.use(express.urlencoded({extended: true}))


//add public folder
app.use(express.static("public"));

//add routes to app
app.use("/", router);


app.listen(port, () => {
    console.log(`The server is working in the port ${port}`);
})