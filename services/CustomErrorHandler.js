
class CustomErrorHandler extends Error{
    constructor(statuscode,message){
        this.statuscode=statuscode;
        this.message=message
    }

    static alreadyExits(message){
        return new CustomErrorHandler(409,message);
    }
}

export default CustomErrorHandler;