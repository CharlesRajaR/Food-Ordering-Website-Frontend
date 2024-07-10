import { isPresentInFavorite } from "../../config/logic"
import { ADD_TO_FAVORITES_REQUEST, REGISTER_REQUEST, GET_USER_REQUEST, LOGIN_REQUEST,
     REGISTER_SUCCESS, LOGIN_SUCCESS, ADD_TO_FAVORITES_SUCCESS,
    ADD_TO_FAVORITES_FAILURE, REGISTER_FAILURE, GET_USER_FAILURE, LOGIN_FAILURE, 
    GET_USER_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS} from "./ActionType"

const initialState = {
    user:null,
    isLoading:false,
    error:null,
    jwt:null,
    favorites:[],
    success:null
}

export const authReducer = (state = initialState, action) => {
  switch(action.type){
     case REGISTER_REQUEST: 
     case LOGIN_REQUEST: 
     case LOGOUT_REQUEST: 
     case GET_USER_REQUEST:  
     case ADD_TO_FAVORITES_REQUEST:   
        return {
          ...state,isLoading:true, error:null, success:null
        } 
    
    case REGISTER_SUCCESS: 
    case LOGIN_SUCCESS: 
        return {
          ...state,isLoading:false, success:"REGISTER_SUCCESS", jwt:action.payload
        } 
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading:false,
        user:action.payload,
        favorites:action.payload.favourites
      }
    
    case ADD_TO_FAVORITES_SUCCESS:
        return{
            ...state, isLoading:false, error:null,
             favorites:isPresentInFavorite(state.favorites, action.payload)?state.favorites.filter(
                (item) => item.id !== action.payload.id
            ):[action.payload,...state.favorites]
        }

     case REGISTER_FAILURE: 
     case LOGIN_FAILURE:  
     case GET_USER_FAILURE:  
     case LOGOUT_FAILURE:
     case ADD_TO_FAVORITES_FAILURE:   
        return {
          ...state,isLoading:false, error:action.payload, success:null
        } 

    case LOGOUT_SUCCESS:
       return initialState;

    default:
        return state;
    }
}