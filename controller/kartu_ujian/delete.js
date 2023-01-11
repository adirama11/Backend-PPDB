const { Kartu } = require('../../models');

module.exports = async(req, res) => {

    const id = req.params.id;
    const cekData = await Kartu.findByPk(id);
    if(!cekData){
        return res.status(404).json({
            msg : 'Data tidak ditemukan'
        });
    } else {
        await cekData.destroy();
    }

    const data = await Kartu.findAll()
    if(!data){
        return res.status(404).json({
            msg : 'Data kosong'
        })
    }

    return res.status(200).json({
        data : data
    })



}