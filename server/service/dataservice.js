const db = require("./db")

register = (userid,username,password) => {
    return db.User.findOne({userid}).then(user => {
        if (user) {
            return {
                statuscode: 401,
                status: false,
                message: "user allready exist"
            }
        }
        else {
            const newuser= new db.User(
                {
                    username,
                    userid,
                    password
                }
            )
        }
        newuser.save()
            return{
                statuscode:200,
                status:true,
                message:"registration success"
            }
        
    })
}




module.exports={
    register

}
 
