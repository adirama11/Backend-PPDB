const { Kartu } = require('../../models');

module.exports = async(req, res) => {

    const data = await Kartu.findAll();
    if(!data){
        return res.status(404).json({
            msg : 'Data is empty'
        })
    }

    return res.status(200).json(data);
}