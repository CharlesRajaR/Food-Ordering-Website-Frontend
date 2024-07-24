import { api } from '../../config/api'
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDER_FAILURE, GET_USERS_ORDER_REQUEST, GET_USERS_ORDER_SUCCESS } from './ActionTypes'

export const createOrder = ({order,jwt}) => {
    return async(dispatch) => {
        dispatch({type:CREATE_ORDER_REQUEST})

        try{
            const { data } = await api.post(`api/order`, order, {
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            // dispatch({type:CREATE_ORDER_SUCCESS, payload:data})
            if(data.payment_url){
                window.location.href=data.payment_url
                console.log("order created successfully", data)
            }
          
        }
        catch(error){
            dispatch({type:CREATE_ORDER_FAILURE, payload:error})
            console.log("error", error)
        }
    }
}

export const getUserOrder = (jwt) => {
    return async(dispatch) => {
        dispatch({type:GET_USERS_ORDER_REQUEST})

        try{
            const { data } = await api.get(`api/order/user`,  {
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            dispatch({type:GET_USERS_ORDER_SUCCESS, payload:data})
            console.log("get user order success", data)
        }
        catch(error){
            dispatch({type:GET_USERS_ORDER_FAILURE, payload:error})
            console.log("error", error)
        }
    }
}