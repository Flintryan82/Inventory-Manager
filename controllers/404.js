module.exports = function(req,res){
    let loggedIn = req.loggedIn;
    let context = {
        loggedIn,
        user:req.user
    }
    res.render("404.hbs",context);
};