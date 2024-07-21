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
            return{...state,
                loading:true,
                error:null
            }
        case actionTypes.GET_USERS_ORDER_SUCCESS:
            return{
                ...state, loading:false,error:null,orders:action.payload
            }
        case actionTypes.CREATE_ORDER_SUCCESS:
            return{
                ...state ,loading:false, error:null, orders:[action.payload, ...state.orders]
            }
        case actionTypes.GET_USERS_ORDER_FAILURE:
            return{
                ...state,loading:false, error:action.payload
            }
        default:
            return{
                ...state
            };
    }
}

export default orderReducer;