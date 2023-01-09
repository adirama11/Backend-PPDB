const { Kloter } = require('../../models');

module.exports = async (req, res) => {

    const allData = await Kloter.findAll();

    if(!allData ){
        return res.status(400).json({
            msg : 'Data is empty'
        })
    }

    return res.status(200).json({
        data : allData
    })
}