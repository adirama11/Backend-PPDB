const { Profile } = require('../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async (req, res) => {

    const input = {
        id_user : 'string | empty:false',
        nama : 'string | empty:false',
        nisn : 'string | empty:false',
        ttl : 'string | empty:false',
        agama : 'string | empty:false',
        alamat : 'string | empty:false',
        no_hp : 'string | empty:false',
        ortu : 'string | empty:false',
        sekolah_asal : 'string | empty:false',
        pil_jurusan : 'string | empty:false',
        skhu : 'string | empty:false',
        kk : 'string | empty:false',
        surat_kes : 'string | empty:false',
        akte : 'string | empty:false',
        raport : 'string | empty:false',
        bukti_bayar : 'string | empty:false',
    }

    const validation = v.validate(req.body, input);

    if(validation.length){
        return res.status(400).json({
            msg : validation
        });
    }

    const Nisn = req.body.nisn;
    const cekNisn = await Profile.findOne({
        where : { Nisn }
    });
    if(cekNisn){
        return res.status(400).json({
            msg : 'NISN sudah digunakan'
        });
    }
    
    const newData = {
        id_user : req.body.id_user,
        nama : req.body.nama,
        nisn : Nisn,
        ttl : req.body.ttl,
        agama : req.body.agama,
        alamat : req.body.alamat,
        no_hp : req.body.no_hp,
        ortu : req.body.ortu,
        sekolah_asal : req.body.sekolah_asal,
        pil_jurusan : req.body.pil_jurusan,
        skhu : req.body.skhu,
        kk : req.body.kk,
        surat_kes : req.body.surat_kes,
        akte : req.body.akte,
        raport : req.body.raport,
        bukti_bayar : req.body.bukti_bayar,
    }
    const createData = await Profile.create(newData);

    return res.status(200).json({
        msg : 'Sukses lengkapi datadiri',
        data : createData
    })

}