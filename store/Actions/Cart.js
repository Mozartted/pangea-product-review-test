import actionType from "../action-type"

export const getBank = ({bankaccounts}) => (dispatch, getstate) => new Promise( async (resolve, reject) => {
	await dispatch({
        type: actionType.GET_ACCOUNTS,
        data: bankaccounts
	})
	resolve();
}).catch(err=>{
	throw err
});

export const updateBanks = ({bankaccount}) => (dispatch, getstate) => new Promise( async (resolve, reject) => {
    
	await dispatch({
        type: actionType.UPDATE_ACCOUNTS,
        data: bankaccount
	})
	resolve();
}).catch(err=>{
	throw err
});


export const deleteAccount = ({bankaccount}) => (dispatch, getstate) => new Promise( async (resolve, reject) => {
    
	await dispatch({
        type: actionType.DELETE_ACCOUNT,
        data: bankaccount
	})
	resolve();
}).catch(err=>{
	throw err
});
