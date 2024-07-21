import * as actionTypes from './ActionTypes'

const initialValue = {
    ingredients:[],
    update:null,
    category:[]
}
const ingredientsReducer = ( state = initialValue, action) => {
    switch(action.type){
        case actionTypes.GET_INGREDIENT:
            return{
                ...state, ingredients:action.payload
            }
        case actionTypes.CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return{
                ...state, category:[...state.category, action.payload]
            }
        case actionTypes.GET_INGREDIENT_CATEGORY_SUCCESS:
            return{
                ...state, category:action.payload
            }
        case actionTypes.CREATE_INGREDIENT_SUCCESS:
            return{
                ...state, ingredients:[...state.ingredients, action.payload]
            }
        case actionTypes.UPDATE_STOCK:
            return{
                ...state, ingredients:state.ingredients.map((item) => item.id===action.payload.id?action.payload:item)
            }
        default:
            return{
                ...state
            }
    }
}

export default ingredientsReducer;