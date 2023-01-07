const { Kloter } = require('../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {
    const input = {
        ruangan : 'string | empty:false',
        waktu : 'string | empty:false'
    }

    const validation = v.validate(req.body, input);

    if(validation.length){
        return res.status(400).json({
            msg : validation
        });
    }

    const newData = {
        ruangan : req.body.ruangan,
        waktu : req.body.waktu
    }

    const updateData = await Kloter.create(newData);

    return res.status(200).json({
        msg : 'Sukses update data',
        data : updateData
    });
}