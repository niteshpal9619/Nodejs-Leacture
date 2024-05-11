import Joi from "joi"

const registerController={
    register(req,res,next){
        //validation

        const registerSchema=Joi.object({
            Name:Joi.string().min(3).max(30).required(),
            email:Joi.string().email().required(),
            password:Joi.string().pattern(new RegExp('[A-Za-zd$@$!%*?&.]{8,20}/')).required(),
            repeat_password:Joi.ref('password')            
        });

        const {error}=registerSchema.validate(req.body);

        if (error){
            return next(error);
        }

        res.json({msg:"Hello From Express"})
    }
}

export default registerController