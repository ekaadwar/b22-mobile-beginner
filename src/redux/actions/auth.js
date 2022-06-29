import axios from "axios";
import toastMessage from "../../utils/showMessage";
const BACKEND_URL = "http://localhost:8080";

export const signUpAction = (data, navigation) => (dispatch) => {
  const form = new URLSearchParams();
  form.append("email", data.email);
  form.append("password", data.password);
  form.append("mobileNumber", data.phone);

  dispatch({ type: "SET_LOADING", payload: true });

  axios
    .post(`${BACKEND_URL}/auth/register`, form)
    .then((res) => {
      dispatch({ type: "SET_LOADING", payload: false });
      toastMessage(res?.data?.message, "success");
      navigation.navigate("login");
    })
    .catch((err) => {
      dispatch({ type: "SET_LOADING", payload: false });
      toastMessage(err?.response?.data?.message);
    });
};
