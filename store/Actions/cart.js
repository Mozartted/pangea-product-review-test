import actionType from "../action-type"

export const addToCart = (item) => (dispatch, getstate) => new Promise( async (resolve, reject) => {
	// check if the item already exists before attempting to add it.
	let cart = getstate().cart
	let includedProduct = cart.filter((product) => product.title == item.title)
	if(includedProduct.length < 1){
		await dispatch({
			type: actionType.ADD_TO_CART,
			data: item
		})
	}else{
		// increas the item number
		await dispatch({
			type: actionType.ADD_TO_ITEM,
			data: item
		})
	}
	resolve();
}).catch(err=>{
	throw err
});

export const addToItem = (item) => (dispatch) => new Promise( async (resolve, reject) => {
	await dispatch({
        type: actionType.ADD_TO_ITEM,
        data: item
	})
	resolve();
}).catch(err=>{
	throw err
});

export const newCurrencyFilter = (products) => (dispatch) =>  new Promise( async (resolve, reject) => {
	await dispatch({
        type: actionType.UPDATE_CART,
        data: products
	})
	resolve();
}).catch(err=>{
	throw err
});

export const minusFromItem = (item) => (dispatch) => new Promise( async (resolve, reject) => {
	await dispatch({
        type: actionType.MINUS_FROM_ITEM,
        data: item
	})
	resolve();
}).catch(err=>{
	throw err
});

export const removeFromCart = (item) => (dispatch) => new Promise( async (resolve, reject) => {
	await dispatch({
        type: actionType.REMOVE_FROM_CART,
        data: item
	})
	resolve();
}).catch(err=>{
	throw err
});


// export const deleteAccount = ({bankaccount}) => (dispatch) => new Promise( async (resolve, reject) => {
    
// 	await dispatch({
//         type: actionType.DELETE_ACCOUNT,
//         data: bankaccount
// 	})
// 	resolve();
// }).catch(err=>{
// 	throw err
// });
