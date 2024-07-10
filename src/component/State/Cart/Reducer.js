import { LOGOUT_SUCCESS } from '../Authentication/ActionType'
import * as actionTypes from './ActionType'

const initialState = {
    cart:null,
    error:null,
    cartItems:[],
    loading:false
}

const cartReducer = ( state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_ITEM_TO_CART_REQUEST:
        case actionTypes.CLEAR_CART_REQUEST:
        case actionTypes.FIND_CART_REQUEST:
        case actionTypes.GET_ALL_CART_ITEM_REQUEST:
        case actionTypes.REMOVE_CART_ITEM_REQUEST:
        case actionTypes.UPDATE_CART_ITEM_REQUEST:
            return{
                ...state, error:null, loading:true
            }

        case actionTypes.FIND_CART_SUCCESS:
            return{
                ...state, error:null, loading:false, cart:action.payload, cartItems:action.payload.items
            }

        case actionTypes.CLEAR_CART_SUCCESS:
            return{
                ...state,error:null, loading:false, cart:action.payload, cartItems:action.payload.items
            }

        case actionTypes.ADD_ITEM_TO_CART_SUCCESS:
            return{
                ...state, error:null, loading:false, cartItems:[action.payload,...state.cartItems]
            }
        case actionTypes.UPDATE_CART_ITEM_SUCCESS:
            return{
                ...state, error:null, loading:false, cartItems:[...state.cartItems.map((item) => item.id===action.payload.id?action.payload:item)]
            }
        case actionTypes.REMOVE_CART_ITEM_SUCCESS:
            return{
                ...state, error:null, loading:false, cartItems:[state.cartItems.filter((item) => item.id !== action.payload)]
            }

        case actionTypes.FIND_CART_FAILURE:
        case actionTypes.REMOVE_CART_ITEM_FAILURE:
        case actionTypes.UPDATE_CART_ITEM_FAILURE:
            return{
                ...state, loading:false, error:action.payload
            }
        case LOGOUT_SUCCESS:
            localStorage.removeItem("jwt")
            return{
                ...state, cartItems:[],cart:null
            }
        default:
            return initialState;
    }
}

export default cartReducer;