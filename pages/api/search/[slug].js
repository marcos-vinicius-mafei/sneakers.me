const SneaksAPI = require('sneaks-api')

const sneaks = new SneaksAPI()

export default function getSneaker(req,res){
    const {slug} = req.query
    sneaks.getProducts(slug,20,function(err,products){
        return res.status(200).json(products)
    })
}