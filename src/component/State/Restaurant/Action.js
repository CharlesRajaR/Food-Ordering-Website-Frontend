import { api } from '../../config/api'
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENTS_FAILURE, CREATE_EVENTS_REQUEST, CREATE_EVENTS_SUCCESS, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_EVENTS_FAILURE, DELETE_EVENTS_REQUEST, DELETE_EVENTS_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_EVENTS_FAILURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, GET_RESTAURANT_CATEGORY_FAILURE, GET_RESTAURANT_CATEGORY_REQUEST, GET_RESTAURANT_CATEGORY_SUCCESS, GET_RESTAURANT_EVENTS_FAILURE, GET_RESTAURANT_EVENTS_REQUEST, GET_RESTAURANT_EVENTS_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from './ActionType'

export const getAllRestaurantsAction = (token) =>{
    return async (dispatch) =>{
        dispatch({type:GET_ALL_RESTAURANT_REQUEST})

        try{
            const { data } = await api.get(`api/restaurants`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            dispatch({type:GET_ALL_RESTAURANT_SUCCESS,payload:data})
            console.log("data",data);
        }
        catch(error){
            dispatch({type:GET_ALL_RESTAURANT_FAILURE,payload:error})
            console.log("error",error)
        }
    }
}

export const getRestaurantById = (reqData) =>{
    return async (dispatch) =>{
        dispatch({type:GET_RESTAURANT_BY_ID_REQUEST})

        try{
            const { data } = await api.get(`api/restaurants/${reqData.restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`
                }
            })
            dispatch({type:GET_RESTAURANT_BY_ID_SUCCESS,payload:data})
            console.log(data);
        }
        catch(error){
            dispatch({type:GET_RESTAURANT_BY_ID_FAILURE,payload:error})
            console.log("error",error)
        }
    }
}

export const getRestaurantByUserId = (jwt) =>{
    return async (dispatch) =>{
        dispatch({type:GET_RESTAURANT_BY_USER_ID_REQUEST})

        try{
            const { data } = await api.get(`api/admin/restaurants/user`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:GET_RESTAURANT_BY_USER_ID_SUCCESS,payload:data})
            console.log("get restaurant by user id success",data);
        }
        catch(error){
            dispatch({type:GET_RESTAURANT_BY_USER_ID_FAILURE,payload:error})
            console.log("error",error)
        }
    }
}

export const createRestaurant = (reqData) =>{
    return async (dispatch) =>{
        dispatch({type:CREATE_RESTAURANT_REQUEST})

        try{
            const { data } = await api.post(`api/admin/restaurants`,reqData.data,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`
                }
            })
            dispatch({type:CREATE_RESTAURANT_SUCCESS,payload:data})
            console.log("created restaurant",data);
        }
        catch(error){
            dispatch({type:CREATE_CATEGORY_FAILURE,payload:error})
            console.log("error",error)
        }
    }
}

export const updateRestaurant = (restaurantId, restaurantData, jwt) =>{
    return async (dispatch) =>{
        dispatch({type:UPDATE_RESTAURANT_REQUEST})

        try{
            const response = await api.put(`api/admin/restaurants/${restaurantId}`,{restaurantData},{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:UPDATE_RESTAURANT_SUCCESS,payload:response.data})
            console.log("data",response.data);
        }
        catch(error){
            dispatch({type:UPDATE_RESTAURANT_FAILURE,payload:error})
            console.log("error",error)
        }
    }
}

export const deleteRestaurant = (restaurantId, jwt) =>{
    return async (dispatch) =>{
        dispatch({type:DELETE_RESTAURANT_REQUEST})

        try{
            const response = await api.delete(`api/admin/restaurants/${restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:DELETE_RESTAURANT_SUCCESS,payload:restaurantId})
            console.log(restaurantId,"id deleted successfully");
        }
        catch(error){
            dispatch({type:DELETE_RESTAURANT_FAILURE,payload:error})
            console.log("error",error)
        }
    }
}

export const updateRestaurantStatus = ({restaurantId,jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:UPDATE_RESTAURANT_STATUS_REQUEST})

        try{
            const response = await api.put(`api/admin/restaurants/${restaurantId}/status`,{},{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:UPDATE_RESTAURANT_STATUS_SUCCESS, payload:response.data})
            console.log("restaurant status updated",response.data);
        }
        catch(error){
            dispatch({type:UPDATE_RESTAURANT_STATUS_FAILURE,payload:error})
            console.log("error",error)
        }
    }
}

export const createEventAction = ({data, jwt, restaurantId}) =>{
    return async (dispatch) =>{
        dispatch({type:CREATE_EVENTS_REQUEST})

        try{
            const response = await api.post(`api/admin/event/${restaurantId}`, data, {
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:CREATE_EVENTS_SUCCESS,payload:response.data})
            console.log("restaurant event created",data);
        }
        catch(error){
            dispatch({type:CREATE_EVENTS_FAILURE,payload:error})
            console.log("error",error)
        }
    }
}

export const getAllEvents = (jwt) =>{
    return async (dispatch) =>{
        dispatch({type:GET_ALL_EVENTS_REQUEST})

        try{
            const response = await api.get(`api/events`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:GET_ALL_EVENTS_SUCCESS,payload:response.data})
            console.log("get all event success",response.data);
        }
        catch(error){
            dispatch({type:GET_ALL_EVENTS_FAILURE,payload:error})
            console.log("error",error)
        }
    }
}

export const deleteEventAction = ({eventId, jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:DELETE_EVENTS_REQUEST})

        try{
            const response = await api.delete(`api/admin/event/delete/${eventId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:DELETE_EVENTS_SUCCESS,payload:eventId})
            console.log("event deleted",eventId,response.data);
        }
        catch(error){
            dispatch({type:DELETE_EVENTS_FAILURE,payload:error})
            console.log("error",error)
        }
    }
}

export const getRestaurantsEvent = ({restaurantId, jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:GET_RESTAURANT_EVENTS_REQUEST})

        try{
            const response = await api.get(`api/admin/events/restaurant/${restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:GET_RESTAURANT_EVENTS_SUCCESS,payload:response.data})
            console.log("get restaurant event success",response.data);
        }
        catch(error){
            dispatch({type:GET_RESTAURANT_EVENTS_FAILURE,payload:error})
            console.log("error",error)
        }
    }
}

export const createCategoryAction = ({reqData, jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:CREATE_CATEGORY_REQUEST})

        try{
            const response = await api.post(`api/admin/category/${reqData.restaurantId}`,reqData,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:CREATE_CATEGORY_SUCCESS,payload:response.data})
            console.log("food category is created",response.data);
        }
        catch(error){
            dispatch({type:CREATE_CATEGORY_FAILURE,payload:error})
            console.log("error",error)
        }
    }
}

export const getRestaurantCategory = ({jwt, restaurantId}) =>{
    return async (dispatch) =>{
        dispatch({type:GET_RESTAURANT_CATEGORY_REQUEST})

        try{
            // const { data } = await api.get(`api/category/restaurant/${restaurantId}`,{
            const { data } = await api.get(`api/category/restaurant/${restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:GET_RESTAURANT_CATEGORY_SUCCESS,payload:data})
            console.log(data);
        }
        catch(error){
            dispatch({type:GET_RESTAURANT_CATEGORY_FAILURE,payload:error})
            console.log("error",error)
        }
    }
}