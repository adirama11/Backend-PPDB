const { Pengumuman } = require('../../models');

module.exports = async(req, res) => {
    
    const data = await Pengumuman.findAll();

    if(!data){
        return res.status(400).json({
            msg : 'Data tidak ditemukan'
        })
    }

    return res.status(200).json({
        data : data
    })
}