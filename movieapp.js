const express=require('express');
const app = express();
const bodyparser = require('body-parser');
const mysql = require('mysql');

var con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "moviebook"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected successfully");
});

app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:false}));
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('movieapp1');
});

app.get('/lastpage',function(req,res){
    res.render('lastpage');
});


app.get('/movieappsignup',function(req,res){
    res.render('movieappsignup')
});

app.get('/bookingpage',function(req,res){
    var sql4="SELECT * FROM booking";
    con.query(sql4,function(err,result){
        res.render('bookingpage',{alldata:result});
        console.log(result)

    });
})

app.get('/moviespage',function(req,res){
    res.render('mainpage')
});

app.get('/movieapplogin',function(req,res){
    res.render('movieapplogin',{value1:""})
});

app.post('/logincredentials',function(req,res){
    const data2=req.body;
    var loginemail=data2.loginemail;
    var loginpassword = data2.loginpassword;
    console.log(loginemail);
    console.log(loginpassword);
    var sql2="SELECT * from userlogin";
    con.query(sql2,function(err,result,field){
        if(err) throw err;
        console.log(result);
        var m,n=0;
        for(m=0;m<result.length;m++)
        {
            if(result[m].email==loginemail && result[m].password==loginpassword)
            {
                res.render('mainpage');
                n=1;
            }

        }
        if(n==0){
            res.render('movieapplogin',{value1:"INVALID CREDENTIALS"});

        }

    });

});
app.post('/usercredentials',function(req,res){
    const data1=req.body;
    var username=data1.username;
    var userpassword = data1.userpassword;
    var sql1 = "INSERT INTO userlogin (email,password) VALUES (?,?) ";
    con.query(sql1,[username, userpassword], function(err,result){
        if(err) throw  err;
            res.render('mainpage');
    
           });
});

app.post('/insertrecord',function(req,res){
    const data = req.body;
    var record = data.movies;
    console.log(record);
});

app.post('/seatsb',function(req,res){
    const data = req.body;
    var booked = data.seatsid;
    var resu = booked.split(",");
    console.log(resu.length);
    for(var i=0;i<resu.length;i++)
    {
        var sql1 = "INSERT INTO booking (seat) VALUES (?) ";
        con.query(sql1,[resu[i]], function(err,result){
           
            


        });

    }
    res.render('lastpage');
});

app.listen(process.env.PORT || 3000,function(){
    console.log("SERVER STARTED");
});