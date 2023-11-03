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
  CLEAR_POPUP,
} from "../Actions/actions-type";

let initialState = {
  user: {},
  allUsers: [],
  services: [],
  postig:[],
  cart: [],
  popup: {
    type: '',
    title: '',
    message: ''
  },
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

    case CREATE_POSTIG:
      return{
        ...state,
        postig:action.payload,
      }

    case CLEAR_POPUP:
      return {
        ... state,
        popup: action.payload
      }

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
