const { Pengumuman } = require('../../models');

module.exports = async(req, res) => {
    const id = req.params.id;
    const data = await Pengumuman.findByPk(id);

    if(!data){
        return res.status(400).json({
            msg : 'Data tidak ditemukan'
        })
    }

    return res.status(200).json({
        data : data
    })
}