import { api } from '../../config/api'
import { CREATE_INGREDIENT_CATEGORY_FAILURE, CREATE_INGREDIENT_CATEGORY_REQUEST, CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT, GET_INGREDIENT_CATEGORY_FAILURE, GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from './ActionTypes'

export const getIngredientsOfRestauant = ({id, jwt}) =>{
    return async(dispatch) => {
        try{
            const response = await api.get(`api/admin/ingredients/restaurant/${id}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:GET_INGREDIENT, payload:response.data})
            console.log("data",response.data)
        }
        catch(error){
            console.log("error",error)
        }
    }
}

export const createIngredient = ({data, jwt}) =>{
    dispatch({type:CREATE_INGREDIENT_REQUEST})
    return async(dispatch) => {
        try{
            const response = await api.post(`api/admin/ingredients`, data,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:CREATE_INGREDIENT_SUCCESS, payload:response.data})
            console.log("data",response.data)
        }
        catch(error){
            dispatch({type:CREATE_INGREDIENT_FAILURE, payload:error})
            console.log("error",error)
        }
    }
}

export const createIngredientCategory = ({data, jwt}) =>{
    dispatch({type:CREATE_INGREDIENT_CATEGORY_REQUEST})
    return async(dispatch) => {
        try{
            const response = await api.post(`api/admin/ingredients/category`, data,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:CREATE_INGREDIENT_CATEGORY_SUCCESS, payload:response.data})
            console.log("data",response.data)
        }
        catch(error){
            dispatch({type:CREATE_INGREDIENT_CATEGORY_FAILURE, payload:error})
            console.log("error",error)
        }
    }
}

export const getIngredientCategory = ({id, jwt}) =>{
    dispatch({type:GET_INGREDIENT_CATEGORY_REQUEST})
    return async(dispatch) => {
        try{
            const response = await api.get(`api/admin/ingredients/restaurant/${id}/category`, {
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:GET_INGREDIENT_CATEGORY_SUCCESS, payload:response.data})
            console.log("data",response.data)
        }
        catch(error){
            dispatch({type:GET_INGREDIENT_CATEGORY_FAILURE, payload:error})
            console.log("error",error)
        }
    }
}

export const updateStockOfIngredient = ({id, jwt}) =>{
    return async(dispatch) => {
        try{
            const response = await api.put(`api/admin/ingredients/${id}/stock`, {},{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:UPDATE_STOCK, payload:response.data})
            console.log("data",response.data)
        }
        catch(error){
            console.log("error",error)
        }
    }
}