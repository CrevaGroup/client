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
  SEARCH_SERVICES,
  FILTERS_SERVICES,
  CREATE_SERVICES,
  DELETE_SERVICES,
  UPDATE_SERVICES,
  GOOGLE_LOGIN,
  CREATE_POSTIG,
  CLEAR_POPUP,
  CREATE_POSTTEXT,
  GET_POSTIG,
  GET_POSTTEXT,
  LOGOUT,
  GET_TRANSACTION_LINK,
  GET_SERVICES,
  GET_TYPES,
  LOCAL_STORAGE,
} from "../Actions/actions-type";

let initialState = {
  user: {},
  allUsers: [],
  services: [],
  servicesFiltered: [],
  reviews: [],
  types: [],
  postIg: [],
  postText: [],
  cart: [],
  cartUrl: "",
  filters: {
    min: 1,
    max: 100,
    order: 'ASC',
    types: []
  },
  popup: {
    type: '',
    title: '',
    message: ''
  },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case LOCAL_STORAGE:
      return {
        ...state,
        [action.payload.key]: action.payload.info 
      }

    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      }

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        popup: {
          type: 'NOTIF',
          title: 'BIENVENIDO',
          message: 'Inicio de sesión exitoso.'
        }
      };

    case CREATE_USER:
      return {
        ...state,
        user: action.payload,
        popup: {
          type: 'NOTIF',
          title: 'REGISTRO EXITOSO',
          message: 'Se ha enviado un correo para validar su cuenta.'
        }
      };

    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        popup: {
          type: 'NOTIF',
          title: 'DATOS EDITADOS',
          message: 'Se han guardado los cambios.'
        }
      };

    case GOOGLE_LOGIN:
      return {
        ...state,
        user: action.payload,
        popup: {
          type: 'NOTIF',
          title: 'BIENVENIDO',
          message: 'Inicio de sesión exitoso.'
        }
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload
      }

    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
        servicesFiltered: action.payload
      }

    case FILTERS_SERVICES:
      return {
        ...state,
        services: action.payload
      };

    case CREATE_SERVICES:
      return {
        ...state,
        services: [...state.services, action.payload],
        popup: {
          type: 'NOTIF',
          title: 'SERVICIO CREADO',
          message: 'Se ha guardado el nuevo servicio correctamente.'
        }
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

    case LOGOUT:
      return{
        ...state,
        user:{}
      }

    case CLEAR_POPUP:
      return {
        ... state,
        popup: action.payload
      }

    case SEARCH_SERVICES:
      return {
        ...state,
        filters: action.payload
      }

    case GET_TRANSACTION_LINK:
      return {
        ...state,
        cartUrl: action.payload
      };

    case GET_REVIEW:
      return {
        ...state,
        reviews: action.payload
      };
    case CREATE_REVIEW:
      return {
        ...state,
        reviews: [...reviews, action.payload]
      };
    case UPDATE_REVIEW:
      return {};
    case DELETE_REVIEW:
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
