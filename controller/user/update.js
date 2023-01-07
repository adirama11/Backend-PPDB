const { User } = require('../../models');
const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {

    const id = req.params.id;
    const dataUser = await User.findByPk(id, {
        attributes : ['id_user', 'email', 'password', 'role']
    });

    if(!dataUser){
        return res.status(404).json({
            msg: 'User not found'
        })
    }
    
    const input = {
        email : 'email | empty:false',
        password : 'string | min:6',
        role : 'string | optional'
    }

    const validation = v.validate(req.body, input);
    if(validation.length){
        return res.status(400),json({
            status : 'Error',
            msg : validation
        })
    };

    const Email = req.body.email;
    if(Email){
        const cekEmail = await User.findOne({
            where : { Email}
        });
    
        if(cekEmail && Email !== dataUser.email){
            return res.status(400).json({
                status : 'ERROR',
                msg : 'Email sudah digunakan'
            })
        }
    }
    
    const Password = req.body.password;
    const cekPassword = await bcrypt.hash(Password, 10);

    const newData = {
        email : Email,
        password : cekPassword,
        role : req.body.role
    }

    const updateData = await dataUser.update(newData);

    return res.status(200).json({
        status : 'OK!',
        msg : 'Sukses update data',
        data : updateData
    })
}
