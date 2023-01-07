const { User } = require('../../models');
const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {
    const input = {
        email : 'email | empty:false',
        password : 'string | empty:false',
        role : 'string | optional'
    }

    const validation = v.validate(req.body, input);

    if(validation.lenght){
        return resizeBy.status(400).json({
            status : 'ERROR',
            msg : validation
        })
    }

    const Email = req.body.email;
    const checkEmail = await User.findOne({
        where : {email : Email},
        attributes : ['id_user', 'email', 'password', 'role']
    });

    if(!checkEmail){
        return res.status(404).json({
            status : 'ERROR',
            msg : 'User not found'
        });
    }

    const Password = req.body.password;
    const checkPass = await bcrypt.compare(Password, checkEmail.password)

    if(!checkPass){
        return res.status(404).json({
            status: 'ERROR',
            msg : 'Email or Password failed'
        })
    }

    const data = {
        email : Email,
        password : Password
    }

    return res.status(200).json({
        status : 'OK!',
        msg : 'User berhasil login',
        data :  data
    });
}
