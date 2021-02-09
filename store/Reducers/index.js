import reduceReducers from "../../utils/reduce-reducers";
import initialState from './inital-state';
import actionType from '../action-type';
import _ from 'lodash';

const INITIAL_STATE = initialState;

let cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {	
		case actionType.ADD_TO_CART:
			return {
				...state,
				cart: [
					...state.cart,
					...[
						{
							...action.data,
							amount: 1
						}
					]
				]
			}
		case actionType.ADD_TO_ITEM:
			// update the cart item with a new amount.
			// get the index
			let addIndex = state.cart.findIndex((item, index) => item.title == action.data.title);
			let addCart = [...state.cart]

			let currentProduct = {...addCart[addIndex]}

			// let product = state.cart.filter((item, addIndex) => item.title == action.data.title)
			let recreatedProduct = {...currentProduct, amount: currentProduct.amount + 1};
			addCart[addIndex] = recreatedProduct
			return {
				...state,
				cart: addCart
			}
		case actionType.MINUS_FROM_ITEM:
			// update the cart item with a new amount.
			// get the index
			let removeIndex = state.cart.findIndex((item, index) => item.title == action.data.title);
			let removeCart = [...state.cart]

			let product = {...removeCart[removeIndex]}

			// let product = state.cart.filter((item, removeIndex) => item.title == action.data.title)
			if(product.amount - 1 <= 0){
				// remove the item from the list.
				if (removeIndex > -1) {
					removeCart.splice(removeIndex, 1);
				  }
				// add back to carts.
				return {
					...state,
					cart: removeCart
				}
			}else{
				let recreatedProduct = {...product, amount: product.amount - 1};
				removeCart[removeIndex] = recreatedProduct
				return {
					...state,
					cart: removeCart
				}
			}
		case actionType.REMOVE_FROM_CART:
			let cart = [...state.cart]
			let filteredCart = cart.filter((item, index) => {
				return item.title !== action.data.title
			})
			return {
				...state,
				cart: [
					...filteredCart
				]
			}
		default:
			return state
			break;
	}
}


const rootReducer = reduceReducers(
	cartReducer,
);


export default rootReducer;
