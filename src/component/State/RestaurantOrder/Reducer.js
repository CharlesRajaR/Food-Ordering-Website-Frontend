import * as actionTypes from './ActionTypes'

const initialState = {
    loading:false,
    error:null,
    restaurantOrder:[]
}
const restaurantOrderReducer = ( state=initialState, action) => {
    switch(action.type){
        case actionTypes.GET_RESTAURANT_ORDER_REQUEST:
        case actionTypes.UPDATE_ORDER_STATUS_REQUEST:
            return{
                ...state,loading:true,error:null
            }
        case actionTypes.GET_RESTAURANT_ORDER_SUCCESS:
            return{
                ...state,loading:false, error:null, restaurantOrder:action.payload
            }
        case actionTypes.UPDATE_ORDER_STATUS_SUCCESS:
            return{
                ...state,loading:false, error:null, restaurantOrder:state.restaurantOrder.map((item) => item.id===action.payload.id?action.payload:item)
            }
        case actionTypes.GET_RESTAURANT_ORDER_FAILURE:
        case actionTypes.UPDATE_ORDER_STATUS_FAILURE:
            return{
                ...state,loading:false, error:action.payload
            }
        default:
            return{
                ...state
            };
    }
}

export default restaurantOrderReducer;