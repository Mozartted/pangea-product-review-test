import '../styles/product-view.module.css'
import {getSymbol, formatCurrency} from "../utils/helpers"

const Product = ({item, addToCart, currentCurrency}) => {
    return (
        <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center">
                <img src={item.image_url} className="zoom" width={150} height={150}/>
            </div>
            <div className="col-12 mt-3 text-center product-box">
                <h4>{item.title}</h4>
                <small>From {getSymbol(currentCurrency)} {formatCurrency(item.price)}</small>
            </div>
            <div className="col-12 text-center mt-2">
                <button className="btn btn-gray-green-dark px-5" onClick={() => addToCart(item)}> <small>Add to cart</small></button>
            </div>
        </div>
    )
}

export default Product