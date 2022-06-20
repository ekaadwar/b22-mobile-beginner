import http from "../../helpers/http";
// import { BACKEND_URL } from "@env";

const BACKEND_URL = "http://localhost:8080";

export const getProfile = () => {
  return async (dispatch) => {
    try {
      const { data } = await http().get(`${BACKEND_URL}/users/profil`);
      dispatch({
        type: "PROFILE_GET_LIST",
        payload: data.results,
      });
      console.log("haaaa");
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

export const updateProfile = (token, key, value, file = null) => {
  return async (dispatch) => {
    const formData = new FormData();
    if (key !== null) {
      formData.append(key, value);
    }

    if (file !== null) {
      formData.append("photo", file);
      console.log(formData);
    }

    try {
      const { data } = await http().patch(`${URL}/users`, formData);
      dispatch({
        type: "PROFILE_UPDATE",
        payload: data.message,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editProfile = (data) => (dispatch) => {
  const form = new FormData();
  form.append("name", data.name);
  axios.put(`${API_URL}/private/profile`, form);
};
