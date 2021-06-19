const Admin = require('../Models/AdminModel');

 
exports.signup = (req, res) => {
    let { firstName, lastName, email, password } = req.body;
    let admin = new Admin({
        firstName,
        lastName,
        email,
        password,
    });
    admin
        .save()
        .then(() => { res.status(200).send(admin) })
        .catch((error) => {
            console.error(error);
            return res.status(404).send('error')
        });
}

exports.login = (req,res)=>{
    let{email,password} = req.body;
    Admin.findOne({email:email})
    .then((admin)=>{
        if (admin){
            console.info(`user with email ${email } was successfull login`)
        if(password === admin.password){
            console.info('password is correct')
            return res.status(200).send(admin);
        }
        console.warn('password incorrect')
        return res.status(401).send("password is incorrect")
        }
        
        
    })
    .catch((error)=>{
        console.error(object)
        return res.status(404).send(`user with email:${email} is dosen't exist!!!`)
    })

}