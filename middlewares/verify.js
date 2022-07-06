// DIDNT USE THIS--------------
const jwt = require("jsonwebtoken");
const check =(req,res,next)=>{

    // if(typeof(req.headers.authorization)!== `undefined`){
      
        if (req.headers.authorization.split(" ")[0] === "Bearer") {
            const token = req.headers.authorization.split(" ")[1];
            jwt.verify(token, process.env.USERTOKEN, (err, payload) => {
              if (err) {
            res.sendStatus(403)
              }
              else{
              console.log(payload);
            }
              next();
            });
          }
         else {
          res.send("You are not authorized");
        }
    // }else{
    //     // forbidden
    //     res.sendStatus(403)
    // }
    
  
}

module.exports ={check}