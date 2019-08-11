const Products = require('../documents/Products').products
const validate = require('./validate')

const ProductSchema = [
    'name',
    'price',
    'type',
    'rating',
    'warranty_years',
    'available'
]

class ProductController{
    static getAll(response){
        response.send(Products)
    }
    static findOne(response, id){
        this.findProduct(id)
        .then(res => response.send(res).end())
        .catch(err => response.send(err).end())
    }
    static addOne(response, data){
        data = {
            ...data,
            rating: 0
        }
        validate(data, ProductSchema)
        .then(() => {
            Products.push({
                ...data,
                 _id: Products[Products.length - 1]._id + 1
            })
            response.send(Products)
            response.end()
        })
        .catch(err => {
            response.send(err)
            response.end()
        })
    }
    static deleteOne(response, id){
        this.findProduct(id)
        .then(res => {
            Products.splice(Products.indexOf(res), 1)
            response.send(Products)
            response.end()
        })
        .catch(err => response.send(err).end())
    }
    static updateOne(response, id, data){
        this.findProduct(id)
        .then(res => {
            validate(data, ProductSchema)
            .then(() => {
                let index = Products.indexOf(res)
                Products[index] = {
                    ...data,
                    _id: res._id
                }
                response.send(Products)
                .end()
            })
            .catch(err => response.send(err).end())
        })
        .catch(err => response.send(err).end())
    }
    static findProduct(id){
        return new Promise((resolve, reject) => {
            let ProductFound = false,
            product
            for(let i of Products){
                if(i._id === id){
                    product = i
                    ProductFound = true
                    break
                }
            }
            (ProductFound === false) ? reject({err: "product not found"}) : resolve(product);
        })
    }
}
module.exports = ProductController