const reqLog= require('../common/reqlog')
const jwt= require('jsonwebtoken')

const auth = (req,res,next)=>{
    reqLog(req)
    console.log("in auth function from ", req.url," route")

    // console.log(req.headers)
    

    const authHeader = req.cookies['jwtaccess']    // req.headers['authorization']   if you have headers set 
    
    if( authHeader ){
        console.log(`Auth header = ${authHeader}`)
        const token = authHeader

        jwt.verify(token, 
            process.env.ACCESS_TOKEN,
            (err,decoded)=>{
                if(err){
                    res.status(403);  
                }
                req.user=decoded.username;
                console.log(decoded)
                next();
            }
            );
 
    }
    else { 
        res.redirect('/v1/users/login')
    }
}


module.exports= auth 