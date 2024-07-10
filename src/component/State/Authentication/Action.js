import axios from "axios"
import { ADD_TO_FAVORITES_FAILURE, ADD_TO_FAVORITES_REQUEST,
     ADD_TO_FAVORITES_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS,
      LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { API_URL, api } from "../../config/api"
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

export const registerUser = (reqData) => async(dispatch) => {
    dispatch({type:REGISTER_REQUEST})

    try{
     const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData)
     if(data.jwt)localStorage.setItem("jwt", data.jwt);
    if(data.role === "ROLE_RESTAURANT_OWNER"){
        reqData.navigate("admin/restaurant")
    }
    else{
        reqData.navigate("/")
    }
    dispatch({type:REGISTER_SUCCESS, payload:data.jwt})
    console.log("register user successful")
    }

    catch(error){
        dispatch({type:REGISTER_FAILURE})
        console.log("error",error)
    }
}

export const loginUser = (reqData) => async(dispatch) => {
    dispatch({type:LOGIN_REQUEST})

    try{
     const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData)
     if(data.jwt)localStorage.setItem("jwt", data.jwt);
    if(data.role === "ROLE_RESTAURANT_OWNER"){
        reqData.navigate("admin/restaurant")
    }
    else{
        reqData.navigate("/")
    }
    dispatch({type:LOGIN_SUCCESS, payload:data.jwt})
    console.log("login successful")
    }

    catch(error){
        dispatch({type:LOGIN_FAILURE})
        console.log("error",error)
    }
}

export const getUser = (jwt) => async(dispatch) => {
    dispatch({type:GET_USER_REQUEST})

    try{
     const { data } = await api.get(`/api/users/profile`,{ headers:{
        Authorization:`Bearer ${jwt}`
     }})
   
    dispatch({type:GET_USER_SUCCESS, payload:data})
    }

    catch(error){
        dispatch({type:GET_USER_FAILURE})
        console.log("error",error)
    }
}

export const addToFavorites = ({jwt, restaurantId}) => async(dispatch) => {
    dispatch({type:ADD_TO_FAVORITES_REQUEST})

    try{
     const { data } = await api.put(`/api/restaurants/${restaurantId}/add-favourites`,{}, {
        headers:{
            Authorization:`Bearer ${jwt}`
        }
     })

    dispatch({type:ADD_TO_FAVORITES_SUCCESS, payload:data})
    }

    catch(error){
        dispatch({type:ADD_TO_FAVORITES_FAILURE})
        console.log("error",error)
    }
}

export const logout = () => async(dispatch) => {
    dispatch({type:LOGOUT_REQUEST})

    try{
     localStorage.clear();
    dispatch({type:LOGOUT_SUCCESS})
    }

    catch(error){
        dispatch({type:LOGOUT_FAILURE})
        console.log("error",error)
    }
}