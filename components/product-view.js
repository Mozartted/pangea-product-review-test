import '../styles/product-view.module.css'
import {getSymbol} from "../utils/helpers"

const Product = ({item, addToCart, currentCurrency}) => {
    return (
        <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center">
                <img src={item.image_url} width={150} height={150}/>
            </div>
            <div className="col-12 mt-3 text-center product-box">
                <h4>{item.title}</h4>
                <small>From {getSymbol(currentCurrency)} {item.price}</small>
            </div>
            <div className="col-12 text-center mt-2">
                <button className="btn btn-gray-green-dark px-2" onClick={() => addToCart(item)}> <small>Add to cart</small></button>
            </div>
        </div>
    )
}

export default Product