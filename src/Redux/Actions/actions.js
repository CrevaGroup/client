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
  GET_REVIEW,
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  GET_TRANSACTION,
  UPDATE_TRANSACTION,
  CREATE_TRANSACTION,
  GET_SERVICE,
  CREATE_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  GOOGLE_LOGIN,
  FILTERS_SERVICES,
} from "./actions-type";

import axios from "axios";



export const getUser = (email, password) => {
  return async function (dispatch) {
    try {
      const firebaseUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(firebaseUser.user.emailVerified);
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
        user = {
          age: age,
          fullName: username,
          email: email,
          id: firebaseUser.user.uid,
          verified: firebaseUser.user.emailVerified,
          photo: photo,
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

export const updateUser = (property) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(`/user`, property);

      if (property.hasOwnProperty(email)) {
        const firebaseUpdateEmail = await updateEmail(
          auth,
          data.id,
          data.email
        );
      } else if (property.hasOwnProperty(password)) {
        const firebaseUpdatePassword = await updatePassword(
          auth,
          data.id,
          property.password
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

export const restoreUser = () => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`URL`);
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

export const createService = () => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`URL`);
      return dispatch({
        type: CREATE_SERVICES,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const updateService = () => {
  return async function (dispatch) {
    try {
      const response = await axios.put(`URL`);
      return dispatch({
        type: UPDATE_PLAN,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const deleteService = () => {
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
        `service/?order=${order}&min=${min}&max${max}&type=${filter}`
      );
      return dispatch({
        type: FILTERS_SERVICES,
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};
