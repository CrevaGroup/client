import { GET_USER, CREATE_USER, DELETE_USER, UPDATE_USER, RESTORE_USER, 
         UPDATE_PLAN, DELETE_PLAN,
         GET_REVIEW, CREATE_REVIEW, UPDATE_REVIEW, DELETE_REVIEW,
         GET_TRANSACTION, UPDATE_TRANSACTION, CREATE_TRANSACTION, DELETE_TRANSACTION,
         GET_SERVICES, CREATE_SERVICES, DELETE_SERVICES } from "../Actions/actions-type";

let initialState = {
    user:{},
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_USER: 
        return{
                ...state,
                user: action.payload
        }
        case CREATE_USER:
            return{
                ...state,
                user: action.payload
            }
        case DELETE_USER:
            return{

            }
        case  UPDATE_USER:
            return{

            }
        case RESTORE_USER:
            return{

            }
        case UPDATE_PLAN:
            return{

            }
        case DELETE_PLAN:
            return{

            }
        case GET_REVIEW:
            return{

            }
        case CREATE_REVIEW:
            return{

            }
        case UPDATE_REVIEW:
            return {

            }
        case DELETE_REVIEW:
            return{

            }
        case GET_TRANSACTION:
            return {

            }
        case UPDATE_TRANSACTION:
            return{

            }
        case DELETE_TRANSACTION:
            return{

            }
        case CREATE_TRANSACTION:
            return{

            }
        case GET_SERVICES:
            return{

            }
        case CREATE_SERVICES:
            return{

            }
        case DELETE_SERVICES:
            return{

            }
        default:
            return{
                state
            }
    }
}

export default rootReducer;