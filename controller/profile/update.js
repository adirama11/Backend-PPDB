const { Profile } = require('../../models');
const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {

    const id = req.params.id;
    const dataUserId = await Profile.findByPk(id, {
        attributes : [ 'id_user', 'nama', 'nisn', 'ttl', 'agama', 'alamat', 'no_hp', 'ortu', 'sekolah_asal', 'pil_jurusan', 'skhu', 'kk', 'surat_kes', 'akte', 'raport', 'bukti_bayar']
    });

    if(!dataUserId){
        return res.status(404).json({
            msg : 'User not found'
        })
    }

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
    if(Nisn){
        const cekNisn = await Profile.findOne({
            where : { Nisn }
        });
        if(cekNisn && Nisn !== dataUserId.nisn)
        return res.status(400).json({
            msg : 'NISN tidak bisa digunakan'
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
    const updateData = await dataUserId.update(newData);

    return res.status(200).json({
        msg : 'Sukses Update Data',
        data : updateData
    })
}