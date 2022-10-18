// TODO: Require Controllers...
const controllers = require("../controllers/index.js");
module.exports = (app) => {
    // TODO...
    app.get("/",controllers.main); // main page
    app.get('/about',controllers.about); // about page
    app.get("/create/product",controllers.create.product.get);
    app.post("/create/product",controllers.create.product.post);
    app.get("/create/type",controllers.create.type.get);
    app.post("/create/type",controllers.create.type.post);
    app.get("/details/:productId",controllers.details); //give details about specific product
    app.get("/attach/type/:productId",controllers.attach.get);
    app.post("/attach/type/:productId",controllers.attach.post);

    app.get('/login',controllers.login);
    // app.get('/signup',controllers.signup);
    app.post('/signup',controllers.signup);
    app.get("*",controllers.fourOhFour); //404 page 
};