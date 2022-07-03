import axios from "axios";
import http from "../../helpers/http";
// import { BACKEND_URL } from "@env";

const BACKEND_URL = "http://localhost:8080";

export const getProfiles = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(`${BACKEND_URL}/users/profil`);
      dispatch({
        type: "PROFILE_GET_LIST",
        payload: data.results,
      });
    } catch (e) {
      dispatch({
        type: "PROFILE_GET_LIST",
        payload: {
          display_name: "Error",
        },
      });
    }
  };
};

export const getProfile = (token) => (dispatch) => {
  axios
    .get(`${BACKEND_URL}/users/profil`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: "SET_PROFILE", payload: res.data.results });
    });
};

export const editProfile = (key, value) => {
  return async (dispatch) => {
    const form = new FormData();
    form.append(key, value);

    await http().patch(`${BACKEND_URL}/users`, form);
  };
};
