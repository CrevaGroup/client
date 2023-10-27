import { GET_USER, CREATE_USER, DELETE_USER, UPDATE_USER, RESTORE_USER, 
        UPDATE_PLAN, DELETE_PLAN, 
        GET_REVIEW, CREATE_REVIEW, UPDATE_REVIEW, DELETE_REVIEW, 
        GET_TRANSACTION, UPDATE_TRANSACTION, CREATE_TRANSACTION, DELETE_TRANSACTION,
        GET_SERVICES, CREATE_SERVICES, DELETE_SERVICES } from "./actions-type"
import axios from "axios"

export const getUser = () => {
    return async function(dispatch){
        try {
            const response = await axios.get(`URL`)
            return dispatch({
                type: GET_USER,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const createUser = () => {
    return async function(dispatch){
        try {
            const response = await axios.post(`URL`)
            return dispatch({
                type: CREATE_USER,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const deleteUser = () => {
    return async function(dispatch){
        try {
            const response = await axios.post(`URL`)
            return dispatch({
                type: DELETE_USER,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const updateUser = () => {
    return async function(dispatch){
        try {
            const response = await axios.put(`URL`)
            return dispatch({
                type: UPDATE_USER,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const restoreUser = () => {
    return async function(dispatch){
        try {
            const response = await axios.post(`URL`)
            return dispatch({
                type: RESTORE_USER,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const updatePlan = () => {
    return async function(dispatch){
        try {
            const response = await axios.put(`URL`)
            return dispatch({
                type: UPDATE_PLAN,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const deletePlan = () => {
    return async function(dispatch){
        try {
            const response = await axios.post(`URL`)
            return dispatch({
                type: DELETE_PLAN,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getReview = () => {
    return async function(dispatch){
        try {
            const response = await axios.get(`URL`)
            return dispatch({
                type: GET_REVIEW,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const createReview = () => {
    return async function(dispatch){
        try {
            const response = await axios.post(`URL`)
            return dispatch({
                type: CREATE_REVIEW, 
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const updateReview = () => {
        return async function(dispatch){
            try {
                const response = await axios.put(`URL`)
                return dispatch({
                    type: UPDATE_REVIEW,
                    payload: response.data
                })
            } catch (error) {
                alert(error.message)
            }
        }
}

export const deleteReview = () => {
    return async function(dispatch){
        try {
            const response = await axios.post(`URL`)
            return dispatch({
                type: DELETE_REVIEW,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getTransaction = () => {
    return async function(dispatch){
        try {
            const response = await axios.get(`URL`)
            return dispatch({
                type: GET_TRANSACTION,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const createTransaction = () => {
    return async function(dispatch){
        try {
            const response = await axios.post(`URL`)
            return dispatch({
                type: CREATE_TRANSACTION,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const updateTransaction = () => {
    return async function(dispatch){
        try {
            const response = await axios.put(`URL`)
            return dispatch({
                type: UPDATE_TRANSACTION,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const deleteTransaction = () => {
    return async function(dispatch){
        try {
            const response = await axios.post(`URL`)
            return dispatch({
                type: DELETE_TRANSACTION,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getServices = () => {
    return async function(dispatch){
        try {
            const response = await axios.get(`URL`)
            return dispatch({
                type: GET_SERVICES,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const createServices = () => {
    return async function(dispatch){
        try {
            const response = await axios.post(`URL`)
            return dispatch({
                type: CREATE_SERVICES,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const deleteServices = () => {
    return async function(dispatch){
        try {
            const response = await axios.post(`URL`)
            return dispatch({
                type: DELETE_SERVICES,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}