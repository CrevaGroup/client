import {
  GET_ALL_USERS,
  GET_USER,
  DELETE_USER,
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
  FILTER_SERVICES,
  RESET_FILTERS,
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
  SET_POPUP,
  CLEAR_POPUP_COMPONENT,
  UPDATE_USER_EMAIL,
  GET_CONFIG,
  GET_ONEUSER,
  GET_ONESERVICE,
  SET_POPUP_COMPONENT,
} from "../Actions/actions-type";

let initialState = {
  user: {},
  allUsers: [],
  services: [],
  servicesFiltered: [],
  allTransactions: [],
  reviews: [],
  types: [],
  postIg: [],
  postText: [],
  config: {},
  cart: [],
  cartUrl: "",
  oneUser:{},
  oneService:{},
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
  popupComponent: {
    type: ''
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case LOCAL_STORAGE:
      return {
        ...state,
        [action.payload.key]: action.payload.info 
      }

    case SET_POPUP:
      return {
        ...state,
        popup: action.payload
      }

    case SET_POPUP_COMPONENT:
      return {
        ...state,
        popupComponent: action.payload
      }

    case CLEAR_POPUP_COMPONENT:
      return {
        ...state,
        popupComponent: action.payload
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

    case UPDATE_USER_EMAIL:
      return {
        ...state,
        user: action.payload,
        popup: {
          type: 'NOTIF',
          title: 'DATOS EDITADOS',
          message: 'Se han guardado los cambios. Se envio un correo para verificar el nuevo email'
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

    case DELETE_USER:
      return {
        ...state,
        allUsers: [...state.allUsers.filter(user => user.id !== action.payload)]
      }

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
        services: action.payload.services,
        filters: action.payload.filters
        // servicesFiltered: action.payload
      }

    case FILTER_SERVICES:
      state.servicesFiltered = state.services;

      if (action.payload.order === 'ASC')
				state.servicesFiltered.sort((a, b) => a.price > b.price ? 1 : -1)
			if (action.payload.order === 'DESC') 
        state.servicesFiltered.sort((a, b) => a.price < b.price ? 1 : -1)
      
      state.servicesFiltered = state.servicesFiltered.filter(service => service.price > action.payload.min);
      state.servicesFiltered = state.servicesFiltered.filter(service => service.price < action.payload.max);

      if (action.payload.types.length)
      state.servicesFiltered = state.servicesFiltered.filter(service => service.Types.some(type => action.payload.types.includes(type.name)));

      return {
        ...state,
        filters: action.payload,
        servicesFiltered: [ ...state.servicesFiltered ]
      };

    case RESET_FILTERS:
      return {
        ...state,
        servicesFiltered: state.services,
        filters: action.payload
      }

    case CREATE_SERVICES:
      return {
        ...state,
        services: [...state.services, action.payload],
        servicesFiltered: [...state.services, action.payload],
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

    case GET_TRANSACTION:
      return {
        ...state,
        allTransactions: action.payload
      }

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
      return {
        ...state,
        reviews: [...state.reviews.filter(review => review.id !== action.payload)]
      };
    case UPDATE_TRANSACTION:
      return {};
    case CREATE_TRANSACTION:
      return {};
    case DELETE_SERVICES:
      return {
        ...state,
        services: [...state.services.filter(service => service.id !== action.payload)]
      };
    case UPDATE_SERVICES:
      return {};
      
    case GET_ONEUSER:
      return{
        ...state,
        oneUser:action.payload,
      }
    case GET_ONESERVICE:
      return{
        ...state,
        oneService:action.payload,
      }

    case GET_CONFIG:
      return {
        ...state,
        config: action.payload
      }

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
