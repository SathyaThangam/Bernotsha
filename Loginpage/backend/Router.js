const e = require("express");

class Router{
    constructor(app,db){
        this.login(app,db);
        this.logout(app,db);
        this.isLoggedIn(app,db);
        this.signup(app,db);
    }

    signup(app,db){
        app.post('/signup',(req,res)=>{
            let sname = req.body.sname;
            let spassword = req.body.spassword;
            let smobile = req.body.smobile;
            let scpassword = req.body.scpassword;       
            var sql3="INSERT INTO signup (name, password, mobile, confirmpassword) VALUES (?,?,?,?)";
            db.query(sql3,[sname,spassword,smobile,scpassword], function(err,result){
                if(err){
                    res.json({
                        success: false,
                        msg:'An error occured, please try again"'
                    })
                    return;
                }
            })
            var sql="INSERT INTO user (username, password) VALUES (?,?)";
            db.query(sql,[sname,spassword], function(err,result){
                if(err){
                    res.json({
                        success: false,
                        msg:'An error occured, please try again'
                    })
                    return;
                }
                res.json({
                    success:false,
                    msg:'Successfully Registered'
                })
                return;
            })




            })
        
    
}


    login(app,db){
        app.post('/login',(req,res) => {
            let username = req.body.username;
            let password = req.body.password;
            username = username.toLowerCase();
            if(username.length > 20 || password.length >20){
                res.json({
                    success: false,
                    msg: 'An errors occured, please try again'
                 
                })
                return;
            }

            let cols = [username];
            db.query('SELECT * FROM user WHERE username = ? LIMIT 1',cols,(err,data,fields)=>{
                if(err){
                    res.json({
                        success: false,
                        msg:'An error occured, please try again"'
                    })
                    return;
                }

                if(data && data.length===1){
                
                        if(data[0].password==password)
                        {
                            req.session.userID = data[0].id;
                            res.json({
                                success: true,
                                username: data[0].username
                            })
                            return;
                        }
                        else{
                            res.json({
                                success:false,
                                msg:'Invalid Password'
                            })
                        }
                    
                }
                else{
                    res.json({
                        success: false,
                        msg: ' User not found'
                    })
                }
            })

        })
    }

    logout(app,db){
        app.post('/logout',(req,res)=>{
            if(req.session.userID){
                req.session.destroy();
                res.json({
                    success:true
                })
                return true;
            }
            else{
                res.json({
                    success: false
                })

                return false;
            }
        });
    }
    isLoggedIn(app,db){
        app.post('/isLoggedIn',(req,res)=>{
            if(req.session.userID){
                let cols = [req.session.userID];
                db.query('SELECT * FROM user WHERE  id = ? LIMIT 1',cols,(err,data,fields)=>{
                    if(data && data.length === 1){
                        res.json({
                            success: true,
                            username: data[0].username
                        })
                        return true;
                    }
                    else{
                        res.json({
                            success: false
                        })
                    }
                })
            }
            else{
                res.json({
                    success: false
                })
            }
        });
    }

}
module.exports = Router;