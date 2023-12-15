const Texi = require('../models/Texi')

module.exports = {
    getTexis: async (req, res) =>{
        try{
            const texiItems = await Texi.find()
            // const texisLeft = await Texi.countDocuments({completed: false})
            res.render('index.ejs', {info: texiItems})//left: itemsLeft

        }catch(error){
            console.error();
        }
    },
    api: async (req, res)=>{
        try{
            
            const result = await Texi.create({
                specialName: req.body.specialName,
                placeToDeliver: req.body.placeToDeliver,
                numberPlate: req.body.numberPlate,
                number: req.body.number,
                image: req.body.image
            })
            console.log(result);
            console.log('post succcessfull')
            res.redirect('/')

        }catch(error){
            console.error(error);
        }
    },
    updateEntry: async (req, res)=>{
        try{
            console.log(req.body)
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