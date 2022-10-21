// TODO: Require Controllers...
const { default: mongoose } = require("mongoose");
const controllers = require("../controllers/index.js");
module.exports = (app) => {
    // TODO...
    app.get("/",controllers.main); // main page
    app.get('/about',controllers.about); // about page
    app.get("/create/product",controllers.create.product.get);
    app.post("/create/product",controllers.create.product.post);

    app.get("/edit/product/:productId",controllers.edit.get);
    app.post("/edit/product/:productId",controllers.edit.post);

    app.get("/delete/product/:id",controllers.delete.get);
    app.post('/delete/product/:id',controllers.delete.post);

    app.get("/create/type",controllers.create.type.get);
    app.post("/create/type",controllers.create.type.post);
    app.get("/details/:productId",controllers.details); //give details about specific product
    app.get("/attach/type/:productId",controllers.attach.get);
    app.post("/attach/type/:productId",controllers.attach.post);


    app.get('/user/login',controllers.user.login.get);
    app.post('/user/login',controllers.user.login.post);

    app.get('/user/signup',controllers.user.signup.get);
    app.post('/user/signup',controllers.user.signup.post);
    // app.get('/signup',controllers.signup);
    // app.post('/signup',controllers.signup);

    app.get('/user/logout',controllers.user.logout.get);

    app.get("*",controllers.fourOhFour); //404 page 
};