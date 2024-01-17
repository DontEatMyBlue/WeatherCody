exports.renderMain = (req,res,next)=>{
    console.log("현재 기온" + req.temp);
    res.render("main");
}