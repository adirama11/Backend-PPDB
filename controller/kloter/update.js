const { Kloter } = require('../../models');
const Validator = require('fastest-validator');
const v = new Validator();

module.exports = async(req, res) => {

    const id = req.params.id;
    const cekData = await Kloter.findByPk(id);

    if(!cekData){
        return res.status(404).json({
            msg : 'Data not found'
        });
    }

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

    const ruangan = req.body.ruangan;
    if(ruangan){
        const cekRuangan = await Kloter.findOne({
            where : {ruangan}
        });

        if(cekRuangan && ruangan !== cekData.ruangan){
            return res.status(400).json({
                msg : 'Ruangan sudah digunakan'
            });
        }
    }

    const newData = {
        ruangan : ruangan,
        waktu : req.body.waktu
    }
    const updateData = await cekData.update(newData);

    return res.status(200).json({
        msg : 'Sukses update data',
        data : updateData
    });
}