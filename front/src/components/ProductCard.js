import React, {useState} from 'react'
import { loadCSS } from 'fg-loadcss';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    IconButton,
    CardActions,
    Modal,
    Icon,
    Button,
} from '@material-ui/core'
import {Rating} from '@material-ui/lab'
import FavoriteIcon from '@material-ui/icons/Favorite'
import DeleteIcon from '@material-ui/icons/Delete'
import ProductService from '../services/ProductService'
import UpdateProduct from './updateProduct'

let ProductCard = (props) => {
    React.useEffect(() => {
      loadCSS(
        'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
        document.querySelector('#font-awesome-css'),
      );
    }, []);
    const [state, setState] = useState({
        modal: false
    })
    return (
        <>
        <Modal open={state.modal} onClose={() => setState({modal:false})}>
            <UpdateProduct product={props.product} update={props.update}/>
        </Modal>
        <Card>
            <CardHeader
                title={props.product.name}
                subheader={props.product.type}
            />
            <CardMedia
                style={{height:0, paddingTop: 150}}
                image="http://www.grup-tek.com//tema/assets/img/default.gif"
                title="default image"
            />
            <Rating
                style={{padding:10}}
                value={props.product.rating}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
            />
            <CardContent>
                Price: {props.product.price}$
            </CardContent>
            <CardActions>
                <IconButton onClick={() => {
                    console.log(props)
                    ProductService.deleteOne(props.product._id)
                    .then(res => props.update(res))
                }}>
                    <DeleteIcon/>
                </IconButton>
                <IconButton onClick={() => setState({modal:true})}>
                    <Icon
                        className="fas fa-wrench"
                    />
                </IconButton>
                <Button style={{marginLeft:50}} size="small">View article</Button>
            </CardActions>
        </Card>
        </>
    )
}

export default ProductCard