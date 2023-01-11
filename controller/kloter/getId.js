const { Kloter } = require('../../models');

module.exports = async(req, res) => {
    const id = req.params.id;
    const data = await Kloter.finByPk(id,{
        attributes : ['id_kloter', 'ruangan', 'waktu']
    });

    if(!data){
        return res.status(404).json({
            msg : 'User not found'
        });
    }

    return res.status(200).json({
        data : data
    });
}