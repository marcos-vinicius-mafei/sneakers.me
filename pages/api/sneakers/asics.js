const SneaksAPI = require('sneaks-api')

const sneaks = new SneaksAPI()

export default function getSneakers(req,res){
    sneaks.getProducts("asics",20,function(err,products){
        return res.status(200).json(products)
    })
}