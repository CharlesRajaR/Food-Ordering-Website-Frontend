import * as actionTypes from './ActionTypes'

const initialState = {
    loading:false,
    error:null,
    orders:[]
}

const orderReducer = (state = initialState, action) =>{
   switch(action.type)
    {
        case actionTypes.GET_USERS_ORDER_REQUEST:
            return{
                loading:true,
                error:null
            }
        case actionTypes.GET_USERS_ORDER_SUCCESS:
            return{
                loading:false,error:null,order:action.payload
            }
        case actionTypes.GET_USERS_ORDER_FAILURE:
            return{
                loading:false, error:action.payload
            }
        default:
            return state;
    }
}

export default orderReducer;