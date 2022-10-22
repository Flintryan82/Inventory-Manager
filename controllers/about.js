module.exports = function(req,res){
    let loggedIn = req.loggedIn;
    let context = {
        loggedIn,
        user:req.user
    }
    res.render("about.hbs",context);
};