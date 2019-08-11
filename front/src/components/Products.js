import React, {Component} from 'react'
import ProductService from '../services/ProductService'
import {Container, Grid, Button, Modal} from '@material-ui/core'
import ProductCard from './ProductCard'
import AddProduct from './AddProduct';

export default class Products extends Component{
    constructor(props){
        super(props)
        this.state = {
            products: [],
            modal: false
        }
        this.updateArticleList = this.updateArticleList.bind(this)
    }
    async componentDidMount(){
        let products = await ProductService.all()
        this.setProducts(products)
    }
    updateArticleList(list){
        this.setState({
            products: list
        })
    }
    setProducts(products){
        this.setState({
            products: products
        })
    }
    render(){
        return (
            <Container style={{paddingTop: 50}}maxWidth="md">
                <Modal style={{marginTop:50}} onClose={() => this.setState({modal:false})} open={this.state.modal}>
                    <AddProduct update={this.updateArticleList}/>
                </Modal>
                <Button variant="contained" onClick={() => this.setState({modal: true})}>
                    Add a product
                </Button>
                <Grid item container justify="center" md={12} spacing={2}>
                    {this.state.products.map((product, key) => (
                      <Grid key={key} item md={4} >
                          <ProductCard product={product} update={this.updateArticleList}/>
                      </Grid>
                    ))}
                </Grid>
            </Container>
        )
    }
}