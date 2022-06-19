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
