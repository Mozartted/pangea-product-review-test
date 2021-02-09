import '../styles/product-view.module.css'

const Product = ({item}) => {
    return (
        <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center">
                <img src={item.image_url} width={150} height={150}/>
            </div>
            <div className="col-12 mt-3 text-center product-box">
                <h4>{item.title}</h4>
                <small>From ${item.price}</small>
            </div>
            <div className="col-12 text-center mt-2">
                <button className="btn btn-gray-green-dark px-2"> <small>Add to cart</small></button>
            </div>
        </div>
    )
}

export default Product