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
    Button
} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import ProductService from '../services/ProductService'

const useStyle = makeStyles({
    input: {
        margin: 25,
        width: "75%"
    },
    button: {
        margin: 25
    }
})
const AddProduct = (props) => {
    const [state, setState] = useState({})
    const classe = useStyle()
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
        
    }
    const handleSubmit = () => {
        ProductService.add(state)
        .then(res => (!res.fieldRequired)? props.update(res) : null)
    }
    return (
        <Container>
            <Grid container justify="center" item md={12}>
                <Grid item md={6}>
                    <Card>
                        <CardHeader
                            title="Add a product"
                        />
                        <Input
                            name="name"
                            className={classe.input}
                            placeholder="name"
                            onChange={handleChange}
                        />
                        <Input
                            name="price"
                            className={classe.input}
                            placeholder="price"
                            onChange={handleChange}
                        />
                        <Input
                            name="type"
                            className={classe.input}
                            placeholder="type"
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
                        <Button className={classe.button} variant="contained" color="primary" onClick={handleSubmit}>
                              Add!
                        </Button>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AddProduct