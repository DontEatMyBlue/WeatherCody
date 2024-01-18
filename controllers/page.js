const mysqlPool = require('../database/mysql_pool');

exports.renderMain = (req,res,next)=>{
    mysqlPool.getConnection((err,connection)=>{
        if(err){
            return res.status(500).json({error:'DB연동 문제 발생'})
        }
        connection.query('show databases',(error,results,fields)=>{
            connection.release();
            if(error){
                console.log(error);
            }
            res.render("main");
            console.log(results)
        });

    })
    console.log("현재 기온" + req.temp);
}