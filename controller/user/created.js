const {User} = require('../../models');
const enkripsi = require('bcrypt');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res ) => {
    const input = {
        email : 'email | empty: false',
        password : 'string | min:6',
        role : 'string | optional'
    }

    const validation = v.validate(req.body, input);
    if ( validation.length){
        return res.status(400).json({
            status : 'ERROR',
            msg : validation
        })
    }

    Email = req.body.email;
    const cekEmail = await User.findOne({
        where : { Email },
        attributes : ['id_user', 'email', 'password', 'role']
    });

    if(cekEmail){
        return res.status(400).json({
            status : ' ERROR',
            msg : 'Email sudah digunakan'
        })
    }

    const pass = await enkripsi.hash(req.body.password, 10);

    const inputData = {
        email : req.body.email,
        password : pass,
        role : req.body.role
    }

    const newData = await User.create(inputData);

    return res.status(200).json({
        status : 'OK!',
        msg : 'Sukses Update Data',
        data : newData
    })
}
