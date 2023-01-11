const { Kartu } = require('../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {

    const input = {
        id_peserta : 'string | empty:false',
        id_kloter : 'string | empty:false'
    }

    const validation = v.validate(req.body, input);

    if(validation.length){
        return res.status(400).json({
            msg : validation
        });
    }

    const createData = await Kartu.create({
        id_peserta : req.body.id_peserta,
        id_kloter : req.body.id_kloter
    })

    return res.status(200).json({
        msg : 'Sukses tambah data',
        data: createData
    })
}