import { api } from '../../config/api'
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS,
DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS,
GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST,
GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST,
SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEM_AVILABILITY_FAILURE,UPDATE_MENU_ITEM_AVILABILITY_REQUEST,
UPDATE_MENU_ITEM_AVILABILITY_SUCCESS } from "./ActionTypes";

export const createMenuItem = ({menu, jwt}) => {
    return async(dispatch) =>{
        dispatch({type:CREATE_MENU_ITEM_REQUEST})
        try{
          const { data } =await api.post(`api/admin/food`, menu, {
          headers:{
            Authorization:`Bearer ${jwt}`
           }
           });
          dispatch({type:CREATE_MENU_ITEM_SUCCESS, payload:data})
          console.log("menu item created successfully",data)
        }
        catch(error){
            dispatch({type:CREATE_MENU_ITEM_FAILURE, payload:error})
            console.log("error", error);
        }
      }
}

export const getMenuItemByRestaurantId = (reqData) => {
    return async(dispatch) =>{
        dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_REQUEST})
        try{
          //  console.log("val",`api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}
          //  &nonVeg=${reqData.nonVegetarian}&seasonal=${reqData.seasonal}`)
           const response =await api.get(`api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}
           &nonVeg=${reqData.nonVegetarian}&seasonal=${reqData.seasonal}`, {
          headers:{
            Authorization:`Bearer ${reqData.jwt}`
           }
           });
          dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_SUCCESS, payload:response.data})
          console.log("get menu item by restaurant id success",response.data)
        }
        catch(error){
            dispatch({type:GET_MENU_ITEM_BY_RESTAURANT_ID_FAILURE, payload:error})
            console.log("error", error);
        }
    }
    
}

export const updateMenuItemAvailability = ({foodId, jwt}) => {
    return async(dispatch) =>{
        dispatch({type:UPDATE_MENU_ITEM_AVILABILITY_REQUEST})
        try{
          const { data } = api.put(`api/admin/food/${foodId}`,{}, {
          headers:{
            Authorization:`Bearer ${jwt}`
           }
           });
          // dispatch({type:UPDATE_MENU_ITEM_AVILABILITY_SUCCESS, payload:data})
          console.log("menu item updated",data)
        }
        catch(error){
            dispatch({type:UPDATE_MENU_ITEM_AVILABILITY_FAILURE, payload:error})
            console.log("error", error);
        }
    }
    
}

export const searchMenuItem = ({keyword, jwt}) => {
    return async(dispatch) =>{
        dispatch({type:SEARCH_MENU_ITEM_REQUEST})
        try{
          const { data } = api.get(`api/food/search?name=${keyword}`, {
          headers:{
            Authorization:`Bearer ${jwt}`
           }
           });
          dispatch({type:SEARCH_MENU_ITEM_SUCCESS, payload:data})
          console.log("data",data)
        }
        catch(error){
            dispatch({type:SEARCH_MENU_ITEM_FAILURE, payload:error})
            console.log("error", error);
        }
    }
    
}

export const deleteFoodAction = ({foodId, jwt}) => {
    return async(dispatch) =>{
        dispatch({type:DELETE_MENU_ITEM_REQUEST})
        try{
          const response = api.delete(`api/admin/food/${foodId}`, {
          headers:{
            Authorization:`Bearer ${jwt}`
           }
           });
          dispatch({type:DELETE_MENU_ITEM_SUCCESS, payload:foodId})
          console.log("food deleted successfully",response)
        }
        catch(error){
            dispatch({type:DELETE_MENU_ITEM_FAILURE, payload:error})
            console.log("error", error);
        }
    }
    
}