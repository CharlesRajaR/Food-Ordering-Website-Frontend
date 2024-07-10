import * as actionTypes from './ActionType';

const initialState = {
    restaurants:[],
    userRestaurants:null,
    restaurant:null,
    loading:false,
    error:null,
    events:[],
    restaurantEvents:[],
    category:[],
    restaurantCategory:[]
}

const restaurantReducer = (state = initialState, action) =>{
    switch(action.type)
       {case actionTypes.CREATE_CATEGORY_REQUEST:
       case actionTypes.CREATE_EVENTS_REQUEST:
       case actionTypes.CREATE_RESTAURANT_REQUEST:
       case actionTypes.DELETE_EVENTS_REQUEST:
       case actionTypes.DELETE_RESTAURANT_REQUEST:
       case actionTypes.GET_ALL_EVENTS_REQUEST:
       case actionTypes.GET_ALL_RESTAURANT_REQUEST:
       case actionTypes.GET_RESTAURANT_BY_ID_REQUEST:
       case actionTypes.GET_RESTAURANT_BY_USER_ID_REQUEST:
       case actionTypes.GET_RESTAURANT_CATEGORY_REQUEST:
       case actionTypes.GET_RESTAURANT_EVENTS_REQUEST:
       case actionTypes.UPDATE_RESTAURANT_STATUS_REQUEST:
       case actionTypes.UPDATE_RESTAURANT_REQUEST:
        return{
            ...state,loading:true,error:null
        }
    
       case actionTypes.CREATE_RESTAURANT_SUCCESS:
        return {
            ...state, loading:false, userRestaurants:action.payload
        }

    case actionTypes.GET_ALL_RESTAURANT_SUCCESS:
        return{
            ...state, loading:false, error:null, restaurants:action.payload
        }

    case actionTypes.GET_RESTAURANT_BY_ID_SUCCESS:
        return{
            ...state, loading:false, error:null, restaurant:action.payload, 
        }

    case actionTypes.GET_RESTAURANT_BY_USER_ID_SUCCESS:
        return {
            ...state, loading:false, error:null, userRestaurants:action.payload
        }

    case actionTypes.UPDATE_RESTAURANT_STATUS_SUCCESS:
        return {
            ...state, loading:false, error:null, userRestaurants:action.payload
        }
    case actionTypes.DELETE_RESTAURANT_SUCCESS:
        return{
            ...state, error:null, loading:false, restaurants:state.restaurants.filter((item) => item.id !== action.payload)
        }
    case actionTypes.CREATE_EVENTS_SUCCESS:
        return{
            ...state, error:null, loading:false, events:[...state.events, action.payload],
             restaurantEvents:[...state.restaurantEvents, action.payload]
        }

    case actionTypes.GET_ALL_EVENTS_SUCCESS:
        return{
            ...state, error:null, loading:false, events:action.payload
        }

    case actionTypes.GET_RESTAURANT_EVENTS_SUCCESS:
        return{
            ...state, error:null, loading:false, restaurantEvents:action.payload
        }
    case actionTypes.DELETE_EVENTS_SUCCESS:
        return{
            ...state, error:null, loading:false, events:state.events.filter((item) => item.id !== action.payload)
        }
    case actionTypes.CREATE_CATEGORY_SUCCESS:
        return{
            ...state, error:null, loading:false, category:[...state.category, action.payload]
        }  
    case actionTypes.GET_RESTAURANT_CATEGORY_SUCCESS:
        return{
            ...state, error:null, loading:false, category:action.payload
        }

       case actionTypes.CREATE_CATEGORY_FAILURE:
       case actionTypes.CREATE_EVENTS_FAILURE:
       case actionTypes.CREATE_RESTAURANT_FAILURE:
       case actionTypes.DELETE_EVENTS_FAILURE:
       case actionTypes.DELETE_RESTAURANT_FAILURE:
       case actionTypes.GET_ALL_EVENTS_FAILURE:
       case actionTypes.GET_ALL_RESTAURANT_FAILURE:
       case actionTypes.GET_RESTAURANT_BY_ID_FAILURE:
       case actionTypes.GET_RESTAURANT_BY_USER_ID_FAILURE:
       case actionTypes.GET_RESTAURANT_CATEGORY_FAILURE:
       case actionTypes.GET_RESTAURANT_EVENTS_FAILURE:
       case actionTypes.UPDATE_RESTAURANT_STATUS_FAILURE:
       case actionTypes.UPDATE_RESTAURANT_FAILURE:
        return{
            ...state,loading:false,error:action.payload
        }

        default:
            return initialState;
    
    }
}

export default restaurantReducer;