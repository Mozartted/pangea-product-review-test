import actionType from "../action-type"

export const addToCart = (item) => (dispatch, getstate) => new Promise( async (resolve, reject) => {
	await dispatch({
        type: actionType.ADD_TO_CART,
        data: item
	})
	resolve();
}).catch(err=>{
	throw err
});

export const addToItem = (item) => (dispatch, getstate) => new Promise( async (resolve, reject) => {
	await dispatch({
        type: actionType.ADD_TO_ITEM,
        data: item
	})
	resolve();
}).catch(err=>{
	throw err
});

export const minusFromItem = (item) => (dispatch, getstate) => new Promise( async (resolve, reject) => {
	await dispatch({
        type: actionType.MINUS_FROM_ITEM,
        data: item
	})
	resolve();
}).catch(err=>{
	throw err
});

export const removeFromCart = (item) => (dispatch, getstate) => new Promise( async (resolve, reject) => {
	console.log(item)
	await dispatch({
        type: actionType.REMOVE_FROM_CART,
        data: item
	})
	resolve();
}).catch(err=>{
	throw err
});


// export const deleteAccount = ({bankaccount}) => (dispatch, getstate) => new Promise( async (resolve, reject) => {
    
// 	await dispatch({
//         type: actionType.DELETE_ACCOUNT,
//         data: bankaccount
// 	})
// 	resolve();
// }).catch(err=>{
// 	throw err
// });
