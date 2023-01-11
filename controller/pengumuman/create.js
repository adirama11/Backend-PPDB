const { Pengumuman } = require('../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {

    const input = {
        id_ujian : 'string | empty:false',
        nilai : 'string | empty:false',
        rangking : 'string | empty:false'
    }

    const validation = v.validate(req.body, input);
    if(validation.length){
        return res.status(400).json({
            msg : validation
        })
    }

    const id_ujian = req.body.id_ujian;
    const cekId = await Pengumuman.findOne({
        where : {id_ujian : id_ujian}
    });
    if(cekId){
        return res.status(400).json({
            msg : 'Data peserta sudah ada'
        });
    }

    const newData = {
        id_ujian : id_ujian,
        nilai : req.body.nilai,
        rangking : req.body.nilai
    }

    const createData = await Pengumuman.create(newData);
    return res.status(200).json({
        msg : 'Sukses tambah data',
        data : createData
    })
}