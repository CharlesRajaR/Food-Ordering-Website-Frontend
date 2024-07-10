import * as actionTypes from "./ActionTypes"

const initialState = {
    menuItem:[],
    loading:false,
    error:null,
    search:[],
    message:null
}


const menuItemReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case actionTypes.CREATE_MENU_ITEM_REQUEST:
        case actionTypes.GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST:
        case actionTypes.SEARCH_MENU_ITEM_REQUEST:
        case actionTypes.DELETE_MENU_ITEM_REQUEST:
        case actionTypes.UPDATE_MENU_ITEM_AVILABILITY_REQUEST:
            return{
                ...state, loading:true, error:null
            }

        case actionTypes.CREATE_MENU_ITEM_SUCCESS:
            return{
                ...state, loading:false, error:null,
                menuItem:[...state.menuItem, action.payload]
            }
        case actionTypes.GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS:
            return{
                ...state, loading:false, error: null, menuItem:action.payload
            }
        case actionTypes.DELETE_MENU_ITEM_SUCCESS:
            return{
                ...state, loading:false, error:null, menuItem:[...state.menuItem.filter((item) => item.id !== CompositionEvent.payload)]
            }
        case actionTypes.UPDATE_MENU_ITEM_AVILABILITY_SUCCESS:
            return{
                ...state, loading:false, error:null, menuItem:[...state.menuItem.map((item) => item.id===action.payload.id?action.payload:item)]
            }
        case actionTypes.SEARCH_MENU_ITEM_SUCCESS:
            return{
                ...state, loading:false, error:null, search:action.payload
            }
        case actionTypes.CREATE_MENU_ITEM_FAILURE:
        case actionTypes.GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE:
        case actionTypes.SEARCH_MENU_ITEM_FAILURE:
        case actionTypes.DELETE_MENU_ITEM_FAILURE:
        case actionTypes.UPDATE_MENU_ITEM_AVILABILITY_FAILURE:
            return{
                ...state, loading:false, error:action.payload
            }

        default:
            return initialState;
        
    }
}

export default menuItemReducer;