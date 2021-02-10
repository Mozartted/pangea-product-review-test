import actionType from "../action-type"

export const updateCurrentCurrency = (currency) => (dispatch) => new Promise( async (resolve, reject) => {
	await dispatch({
        type: actionType.UPDATE_CURRENCY,
        data: currency
	})
	resolve();
}).catch(err=>{
	throw err
});