import reduceReducers from "../../utils/reduce-reducers";
import initialState from './inital-state';
import actionType from '../action-type';
import _ from 'lodash';

const INITIAL_STATE = initialState;

let cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {	
		case actionType.CONTRACT_UPDATE:
			return {
				...state,
				newContract: {
					...state.newContract,
					...action.data
				}
			}
			break;
		case actionType.GET_CONTRACTS:
			return {
				...state,
				contracts: action.data
			}
			break;
		default:
			return state
			break;
	}
}


const rootReducer = reduceReducers(
	cartReducer,
);


export default rootReducer;
