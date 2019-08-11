const app = require('../www/listen')
const Products = require('../controllers/ProductController')

exports.ProductRouting = () => {
    app.get('/products', (req, res) => {
        console.log("GET Request on Route /products")
        Products.getAll(res)
    })
    app.post('/product', (req, res) => {
        console.log("POST Request on /product")
        let data = '';
        req.on('data', chunk => data += chunk)
        req.on('end', () => {
            data = JSON.parse(data)
            Products.addOne(res, data)
        })
    })
    app.route('/product/:id')
    .get((req, res) => {
        console.log(`GET Request on Route /product/${req.params.id}`)
        Products.findOne(res, parseInt(req.params.id))
    })
    .delete((req, res) => {
        console.log(`DELETE Request on Route /product/${req.params.id}`)
        Products.deleteOne(res, parseInt(req.params.id))
    })
    .put((req, res) => {
        console.log(`PUT Request on Route /product/${req.params.id}`)
        let data = ''
        req.on('data', chunk => data += chunk)
        req.on('end', () => Products.updateOne(res, parseInt(req.params.id), JSON.parse(data)))
        console.log(data)
    })
}