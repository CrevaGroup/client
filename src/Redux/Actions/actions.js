import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  deleteUser,
  updateEmail,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../Firebase";

import {
  GET_USER,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  RESTORE_USER,
  GOOGLE_LOGIN,
  GET_REVIEW,
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  GET_TRANSACTION_LINK,
  GET_TRANSACTION,
  UPDATE_TRANSACTION,
  CREATE_TRANSACTION,
  SEARCH_SERVICES,
  CREATE_SERVICES,
  UPDATE_SERVICES,
  DELETE_SERVICES,
  FILTER_SERVICES,
  RESET_FILTERS,
  GET_ALL_USERS,
  SET_POPUP,
  CLEAR_POPUP,
  CREATE_POSTIG,
  CREATE_POSTTEXT,
  GET_POSTIG,
  GET_POSTTEXT,
  LOGOUT,
  GET_SERVICES,
  GET_TYPES,
  LOCAL_STORAGE,
  GET_ONEUSER,
  GET_ONESERVICE,
} from "./actions-type";

import axios from "axios";
import App from "../../../cloudinary";

export const setLocalStorage = (key) => {
  return async function (dispatch) {
try {
  const info = await JSON.parse(localStorage.getItem(key))
  if(info){
    return dispatch({
      type: LOCAL_STORAGE,
      payload: {info, key}
    })
  }
} catch (error) {
  return dispatch({
    type: SET_POPUP,
    payload: {
      type: 'ERROR',
      title: 'OOPS!',
      message: error.message
  }});
}
}
}

export const getUser = (email, password) => {
  return async function (dispatch) {
    try {
      const firebaseUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!firebaseUser.user.emailVerified) {
        return dispatch({
          type: SET_POPUP,
          payload: {
            type: 'ERROR',
            title: 'OOPS!',
            message: error.message
        }});
      }

      const response = firebaseUser.user.uid
        ? await axios.get(`/user/?id=${firebaseUser.user.uid}`)
        : null;

        localStorage.setItem("user", JSON.stringify(response.data))

      return dispatch({
        type: GET_USER,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  }
}

export const getAllUsers = (deleted) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/user/?deleted=${deleted}`);
      return dispatch({
        type: GET_ALL_USERS,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const googleLogin = () => {
  return async function (dispatch) {
    try {
      const provider = new GoogleAuthProvider();
      const googleUser = await signInWithPopup(auth, provider);
      const user = {
        providerId: googleUser.providerId,
        fullName: googleUser.user.displayName,
        email: googleUser.user.email,
        id: googleUser.user.uid,
        photo: googleUser.user.photoURL,
      };
      const response = await axios.post("/user", user);
      localStorage.setItem("user", JSON.stringify(response.data))
      return dispatch({
        type: GOOGLE_LOGIN,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const createUser = (username, password, email, birthdate, nationality) => {
  return async function (dispatch) {
    try {
      const firebaseUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      let user = {};
      if (firebaseUser.user) {
        user = {
          age: birthdate,
          fullName: username,
          email: email,
          id: firebaseUser.user.uid,
          verified: firebaseUser.user.emailVerified,
          nacionalidad: nationality
        };
      }
      await axios.post("/user", user);
      localStorage.setItem("user", JSON.stringify(user))
      sendEmailVerification(firebaseUser.user);
      return dispatch({
        type: CREATE_USER,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const deleteUserById = (email, password) => {
  return async function (dispatch) {
    try {
      const firebaseUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const id = firebaseUser.user.uid;
      const disable = await deleteUser(firebaseUser);
      if (disable) await axios.delete(`/user/${id}`);
      return dispatch({
        type: DELETE_USER,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const updateUser = (properties) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(`/user`, properties);

      if (properties.hasOwnProperty(email)) {
        const firebaseUpdateEmail = await updateEmail(
          auth,
          data.id,
          data.email
        );
      } else if (properties.hasOwnProperty(password)) {
        const firebaseUpdatePassword = await updatePassword(
          auth,
          data.id,
          properties.password
        );
      }

      return dispatch({
        type: UPDATE_USER,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const restoreUser = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/user/${id}`);
      return dispatch({
        type: RESTORE_USER,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const getReview = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/review`);
      return dispatch({
        type: GET_REVIEW,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const createReview = ({description, serv},star,id) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/review`,{
        description:description,
        assessment:star,
        userId:id,
        serviceId:serv
      });
      return dispatch({
        type: CREATE_REVIEW,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const updateReview = () => {
  return async function (dispatch) {
    try {
      const response = await axios.put(`URL`);
      return dispatch({
        type: UPDATE_REVIEW,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const deleteReview = () => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`URL`);
      return dispatch({
        type: DELETE_REVIEW,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const getTransaction = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`URL`);
      return dispatch({
        type: GET_TRANSACTION,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const createTransaction = () => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`URL`);
      return dispatch({
        type: CREATE_TRANSACTION,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const updateTransaction = () => {
  return async function (dispatch) {
    try {
      const response = await axios.put(`URL`);
      return dispatch({
        type: UPDATE_TRANSACTION,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const createServices = (service) => {
  return async function (dispatch) {
    try {
      const photoURL = await App(service.photo);
      const response = await axios.post(`/service`, {
        ...service,
        photo: photoURL,
      });
      return dispatch({
        type: CREATE_SERVICES,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const updateServices = () => {
  return async function (dispatch) {
    try {
      const response = await axios.put(`URL`);
      return dispatch({
        type: UPDATE_SERVICES,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const deleteServices = () => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`URL`);
      return dispatch({
        type: DELETE_SERVICES,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const filterServices = (filters) => {
  return {
    type: FILTER_SERVICES,
    payload: filters
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
    payload: {
      min: 1,
      max: 100,
      order: 'ASC',
      types: []
    }
  }
}

export const getServices = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `service/`
      );
      return dispatch({
        type: GET_SERVICES,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `type/`
      );
      return dispatch({
        type: GET_TYPES,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const searchServices = (input) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `service/search`,
        input
      );
      return dispatch({
        type: SEARCH_SERVICES,
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  };
};

export const setPopup = (type) => {
  return {
    type: SET_POPUP,
    payload: {
      type: type,
      title: '',
      message: ''
    }
  }
}

export const clearPopup = () => {
  return {
    type: CLEAR_POPUP,
    payload: {
      type: '',
      title: '',
      message: ''
    }
  }
}

export const getPostIg = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`/igpost`);
      return dispatch({
        type:GET_POSTIG,
        payload: response.data
      })
    } catch(error) {
      console.log(error.message)
    }
  }
}

export const getPostText = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`/textblog`);
      return dispatch({
        type:GET_POSTTEXT,
        payload: response.data
      })
    } catch(error) {
      console.log(error.message)
    }
  }
}

export const createPostIg = (postURL) => {
  return async dispatch => {
    try {
      const response = await axios.post(`igpost/`,{url:postURL});
      return dispatch({
        type: CREATE_POSTIG,
        payload: response.data
      });
    } catch(error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  }
}

export const createPostText = (title, content) => {
  return async dispatch => {
    try {
      const response = await axios.post(`/textblog/`,{
        title,
        content
      });
      return dispatch({
        type:CREATE_POSTTEXT,
        payload: response.data
      });
    } catch(error) {
      alert(error.message);
    }
  }
}

export const logout = () => {
  localStorage.clear()
  return dispatch => {
    return dispatch({
      type:LOGOUT,
      payload: ''
    })
  } 
}

export const getTransactionLink = (transactionInfo, userCountry) => {
  return async dispatch => {
    try {
      const URL = userCountry === "Argentina"?await axios.post('/transaction/mpLink', transactionInfo)
      : await axios.post('/stripe', transactionInfo);
      window.location.href = URL.data;
      return dispatch({
        type: GET_TRANSACTION_LINK,
      })
    } catch (error) {
      return dispatch({
        type: SET_POPUP,
        payload: {
          type: 'ERROR',
          title: 'OOPS!',
          message: error.message
      }});
    }
  }
}

export const getOneUser = (id) => {
  return async dispatch => {
    try{
      const response = await axios.get(`/user/?id=${id}`);
      return dispatch({
        type:GET_ONEUSER,
        payload:response.data
      })
    } catch(error) {
      console.log(error);
    }
  }
}

export const getOneService = (id) => {
  return async dispatch => {
    try{
      const response = await axios.get(`/service/?id=${id}`);
      return dispatch({
        type:GET_ONESERVICE,
        payload:response.data
      })
    } catch(error) {
      console.log(error);
    }
  }
}