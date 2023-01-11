const { Kloter } = require('../../models');

module.exports = async(req, res) => {

    const id = req.params.id;
    const idData = await Kloter.findByPk(id);

    if(!idData){
        return res.status(404).json({
            msg : 'User not found'
        });
    } else {
        await idData.destroy();
    }

    const data = await Kloter.findAll();
    
    if(!data){
        return res.status(400).json({
            msg : 'Data is empty'
        })
    }

    return res.status(200).json({
        msg : 'Data berhasil dihapus',
        data : data
    })
}