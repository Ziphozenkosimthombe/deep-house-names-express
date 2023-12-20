const Texi = require('../models/Texi')

module.exports = {
    getTexis: async (req, res) =>{
        try{
            const texiItems = await Texi.find().sort({ number: 1})
            const itemsLeft = await Texi.countDocuments({complited: false})
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
                image: req.body.image,
                complited: false
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
            console.log(req.body)
            await Texi.findOneAndDelete({_id:req.body.texiIdFromJSFile})
            console.log('deleted')
            res.json('success delete')
        }catch(error){
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.texiIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    }
    
    
}
