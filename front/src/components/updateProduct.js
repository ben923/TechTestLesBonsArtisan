import React, {useState} from 'react'
import {
    Container,
    Grid,
    Input,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    Card,
    CardHeader,
    CardMedia,
    Button
} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import ProductService from '../services/ProductService'

const useStyle = makeStyles({
    input: {
        margin: 25,
        width: "75%"
    },
    image: {
        height:0,
        paddingTop: 150
    }
})
const UpdateProduct = (props) => {
    const [state, setState] = useState({
        price: props.product.price,
        available: props.product.available,
        warranty_years: props.product.warranty_years,
        name: props.product.name,
        type: props.product.type,
        rating: props.product.rating
    })
    const classe = useStyle()
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
        
    }
    const handleSubmit = () => {
        ProductService.updateOne(props.product._id, state)
        .then(res => props.update(res))
        .catch(err => console.log(err))
    }
    return (
        <Container>
            <Grid container justify="center" item md={12}>
                <Grid item md={6}>
                    <Card>
                        <CardHeader
                            title="update product"
                        />
                        <CardMedia
                            className={classe.image}
                            image={require('../images/default.gif')}
                        />
                        <Input
                            name="name"
                            className={classe.input}
                            placeholder={props.product.name}
                            onChange={handleChange}
                        />
                        <Input
                            name="price"
                            className={classe.input}
                            placeholder={props.product.price}
                            onChange={handleChange}
                        />
                        <Input
                            name="type"
                            className={classe.input}
                            placeholder={props.product.type}
                            onChange={handleChange}
                        />
                        <FormControl className={classe.input}>
                            <InputLabel htmlFor="warranty">warranty years</InputLabel>
                            <Select 
                                name="warranty_years"
                                onChange={handleChange}>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl className={classe.input}>
                            <InputLabel htmlFor="available">available</InputLabel>
                            <Select
                                name="available"
                                onChange={handleChange}>
                                <MenuItem value={true}>oui</MenuItem>
                                <MenuItem value={false}>non</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                              Update!
                        </Button>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UpdateProduct