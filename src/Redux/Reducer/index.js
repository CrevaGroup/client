import {
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
  DELETE_TRANSACTION,
  GET_SERVICE,
  CREATE_SERVICE,
  DELETE_SERVICE,
  UPDATE_SERVICE,
  GOOGLE_LOGIN,
  FILTERS_SERVICES,
} from "../Actions/actions-type";

let initialState = {
  user: {},
  services: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

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
    case GET_SERVICE:
      return {};
    case CREATE_SERVICE:
      return {};
    case DELETE_SERVICE:
      return {};
    case UPDATE_SERVICE:
      return {};

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
