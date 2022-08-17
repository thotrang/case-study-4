import jwt from "jsonwebtoken";
export const SERCET_KEY ="thotrang";
export const auth = (req,res,next) =>{
    let authorization = req.headers.authorization;
    if(!authorization){
        res.status(401).json({
            message:"you is anonimous"
        })
    }else{
        let accessToken = authorization.split(' ')[1];
        jwt.verify(accessToken,SERCET_KEY,(err,data)=>{
            if(err){
                res.status(401).json({
                    message:"you is anonimous"
                })
            }else{
                req.decoded = data;
                next()
            }
        })
    }
}