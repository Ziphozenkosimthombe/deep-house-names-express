module.exports = {
    getEditTexi: async (req, res)=>{
        try{
            res.render('index.ejs', {info})
        }catch(error){
            console.error(error);
        }
    }
}