const express=require('express')
const bcrypt=require("bcrypt")
var mongoose=require('mongoose')
const saltRounds=10
const dbPassword="req.body.password"
const password=""

var bodyParser=require('body-parser')
var cors = require('cors')
const app=express();


//mongo db connection
mongoose.Promise=global.Promise
mongoose.connect('mongodb://localhost:27017/periods',{ useNewUrlParser: true });


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//getting value from the user once register button is clicked
app.post('/register',function(req,res)
{
    periods.findOne({email:req.body.email},function(err,user){ //getting the email from DB
        if(user)
        return res.status(400).send({
            message:"sorry you have already registered with this email"
        })
    })
//hash the password and save it
    bcrypt.hash(dbPassword, saltRounds, function(err, hash) {
        var user= new periods(data);
        user.save().then(function(data)
        {
            res.json({message:"success"})
        })
    })

});

app.post('/login',function(req,res)
{
    periods.findOne({                               //find the user from the DB
        where: {
                email: req.body.email
               }
            }).then(function (user) {
        if (!user) {
            res.status(500).json({
                messgae:"invalid user"
            })
        } else {
        bcrypt.hash(password, saltRounds, function(err, hash) {                     //get the password from user
        bcrypt.compare(req.body.password, password, function (err, result) {        // compare the password with DB
      if (result == true) {
          res.status(200).json({
              message:"login successfull"
          })
      } else {
       res.send('Incorrect password');
      }
    }); 
    });
   }
});
});

// save the data that is entered in user page

app.post('/user',function(req,res)
{
    console.log(req.body)
    var userdata=req.body
    var period1= new period(userdata)
    period1.save().then(function(data){
        res.json({
            message:"success"
        })
    }).catch(function(err){
        res.status(500).json({
            message:"Error"
        })
    })

})


