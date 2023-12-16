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



// updateCompletionStatus: async (req, res) => {
//     try {
//       const result = await Texi.findByIdAndUpdate(
//         req.body.texiId,
//         { completed: req.body.completed },
//         { new: true }
//       );
//       console.log(result);
//       res.json('Successfully updated completion status');
//     } catch (error) {
//       console.error(error);
//       res.status(500).json('Error updating completion status');
//     }
//   },