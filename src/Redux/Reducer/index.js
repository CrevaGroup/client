import {
  GET_ALL_USERS,
  GET_USER,
  CREATE_USER,
  UPDATE_USER,
  GET_REVIEW,
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  GET_TRANSACTION,
  UPDATE_TRANSACTION,
  CREATE_TRANSACTION,
  FILTERS_SERVICES,
  CREATE_SERVICES,
  DELETE_SERVICES,
  UPDATE_SERVICES,
  GOOGLE_LOGIN,
  CREATE_POSTIG,
  CREATE_POSTTEXT,
  GET_POSTIG,
  GET_POSTTEXT,
} from "../Actions/actions-type";

let initialState = {
  allUsers: [],
  user: {},
  services: [],
  popup: {
    type: '',
  },
  postIg:[],
  postText:[],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      }

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case CREATE_USER:
      return {
        ...state,
        user: action.payload,
      };

    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };

    case GOOGLE_LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case FILTERS_SERVICES:
      return {
        ...state,
        services: action.payload
      };

    case CREATE_SERVICES:
      return {
        ...state,
        services: [...state.services, action.payload]
      };

    case GET_POSTIG:
      return{
        ...state,
        postIg: action.payload,
      }

    case GET_POSTTEXT:
      return{
        ...state,
        postText: action.payload,
      }

    case CREATE_POSTIG:
      return{
        ...state,
        postIg:[...state.postIg, action.payload],
      };

    case CREATE_POSTTEXT:
      return{
        ...state,
        postText:[...state.postText, action.payload],
      };

    case GET_REVIEW:
      return {};
    case CREATE_REVIEW:
      return {};
    case UPDATE_REVIEW:
      return {};
    case DELETE_REVIEW:
      return {};
    case GET_TRANSACTION:
      return {};
    case UPDATE_TRANSACTION:
      return {};
    case CREATE_TRANSACTION:
      return {};
    case DELETE_SERVICES:
      return {};
    case UPDATE_SERVICES:
      return {};

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
