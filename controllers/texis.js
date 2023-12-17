const Texi = require('../models/Texi')

module.exports = {
    getTexis: async (req, res) =>{
        try{
            const texiItems = await Texi.find().sort({ number: 1})
            // const itemsLeft = await Texi.countDocuments({facheck: false})
            res.render('index.ejs', {info: texiItems})//

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
                // fa: false
            })
            console.log(result);
            console.log('post succcessfull')
            res.redirect('/')

        }catch(error){
            console.error(error);
        }
    },
    deleteEntry: async (req, res)=>{
        try{
            await Texi.deleteOne({
                specialName: req.body.specialName
            })
            res.json('success delete')

        }catch(error){
            console.error(error);
        }
    }
    
}
