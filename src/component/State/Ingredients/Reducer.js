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
                ingredients:action.payload
            }
        case actionTypes.CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return{
                category:[...state.category, action.payload]
            }
        case actionTypes.GET_INGREDIENT_CATEGORY_SUCCESS:
            return{
                category:action.payload
            }
        case actionTypes.CREATE_INGREDIENT_SUCCESS:
            return{
                ingredients:[...state.ingredients, action.payload]
            }
        case actionTypes.UPDATE_STOCK:
            return{
                ingredients:state.ingredients.mao((item) => item.id===action.payload.id?action.payload:item)
            }
    }
}

export default ingredientsReducer;