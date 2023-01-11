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

    const id = req.params.id;
    const data = await Kartu.findByPk(id);
    if(!data){
        return res.status(404).json({
            msg : 'Data not found'
        })
    }

    const id_peserta = req.body.id_peserta;
    if(id_peserta){
        const cekPeserta = await Kartu.findOne({
            where : {id_peserta : id_peserta}
        });
        if(cekPeserta && id_peserta !== req.body.id_peserta){
            return res.status(400).json({
                msg : 'Data peserta sudah digunakan'
            });
        }
    }

    const newData = {
        id_peserta : id_peserta,
        id_kloter : req.body.id_kloter
    }

    const updateData = await data.update(newData);

    return res.status(200).json({
        msg : 'Sukses update data',
        data: updateData
    });
}