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
  GET_TRANSACTION,
  UPDATE_TRANSACTION,
  CREATE_TRANSACTION,
  CREATE_SERVICES,
  UPDATE_SERVICES,
  DELETE_SERVICES,
  FILTERS_SERVICES,
  GET_ALL_USERS,
  CREATE_POSTIG,
} from "./actions-type";

import axios from "axios";
import App from "../../../cloudinary";

export const getUser = (email, password) => {
  return async function (dispatch) {
    try {
      const firebaseUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!firebaseUser.user.emailVerified) {
        alert("Verifica Tu Email!!");
        return;
      }

      const response = firebaseUser.user.uid
        ? await axios.get(`/user/?id=${firebaseUser.user.uid}`)
        : null;

      return dispatch({
        type: GET_USER,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getAllUsers = (deleted) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/user/?deleted=${deleted}`);
      return dispatch({
        type: GET_ALL_USERS,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
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
      return dispatch({
        type: GOOGLE_LOGIN,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const createUser = (username, password, email, age, photo) => {
  return async function (dispatch) {
    try {
      const firebaseUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      let user = {};
      if (firebaseUser.user) {
        const photoURL = await App(photo);
        user = {
          age: age,
          fullName: username,
          email: email,
          id: firebaseUser.user.uid,
          verified: firebaseUser.user.emailVerified,
          photo: photoURL,
        };
      }
      const response = await axios.post("/user", user);
      sendEmailVerification(firebaseUser.user);
      alert(response.data);
      return dispatch({
        type: CREATE_USER,
      });
    } catch (error) {
      alert(error.message);
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
      if (disable) {
        const response = await axios.delete(`/user/${id}`);
        alert(response.data);
      }
      return dispatch({
        type: DELETE_USER,
      });
    } catch (error) {
      alert(error.message);
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
      alert(error.message);
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
      alert(error.message);
    }
  };
};

export const getReview = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`URL`);
      return dispatch({
        type: GET_REVIEW,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const createReview = () => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`URL`);
      return dispatch({
        type: CREATE_REVIEW,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
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
      alert(error.message);
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
      alert(error.message);
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
      alert(error.message);
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
      alert(error.message);
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
      alert(error.message);
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
      alert(error.message);
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
      alert(error.message);
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
      alert(error.message);
    }
  };
};

export const filtersService = ({ min, max, order, filter }) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `service/?order=${order}&min=${min}&max=${max}&type=${filter}`
      );
      return dispatch({
        type: FILTERS_SERVICES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
      return dispatch({
        type: FILTERS_SERVICES,
        payload: [],
      });
    }
  };
};

export const createPostIg = (quantity, posts) => {
  return async dispatch => {
    try {
      const response = await axios.get(`blog/`);
      return dispatch({
        type:CREATE_POSTIG,
        payload: response.data
      });
    } catch(error) {
      alert(error.message);
    }
  }
}