const Texi = require('../models/Texi')

module.exports = {
    getEdit: async (req, res)=>{
        const id = req.params.id
        const texiItems = await Texi.find().sort({ number: 1})
        res.render('edit', {info: texiItems, texiId: id})
    },
    updateEntry: async (req, res)=>{
        try{
            console.log(req.body)
            Object.keys(req.body).forEach(key =>{
                if (req.body[key] === null || req.body[key] === undefined || req.body[key] === '') {
                    delete req.body[key];
                  }
            })
            const result = await Texi.findOneAndUpdate(
                {specialName: req.body.specialName},
                {
                    $set: req.body
                },
            )
            console.log(result)
            res.json('successfully')

        }catch(error){
            console.error(error);
        }
    }


}