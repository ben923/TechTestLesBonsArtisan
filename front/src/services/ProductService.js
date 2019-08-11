import axios from 'axios'

const ProductService = {
    all: () => {
        return new Promise((resolve, reject) => {
            axios.get('/products')
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        })
    },
    deleteOne: (id) => {
        return new Promise((resolve, reject) => {
            axios.delete(`/product/${id}`)
            .then(res => resolve(res.data))
            .catch(err => reject(err))
        })
    },
    updateOne: (id, data) => {
        return new Promise((resolve, reject) => {
            axios.put(`/product/${id}`, data)
            .then(res => resolve(res.data))
            .catch(err => reject(err)) 
        })
    },
    add: (data) => {
        return new Promise((resolve, reject) => {
            axios.post(`/product`, data)
            .then(res => resolve(res.data))
            .catch(err => reject(err)) 
        })
    }
}
export default ProductService