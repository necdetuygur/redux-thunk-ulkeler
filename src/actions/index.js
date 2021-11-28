import axios from "axios";

export const getCountries = () => (dispatch) => {
  axios
    .get("https://restcountries.com/v2/all")
    .then((r) =>
      dispatch({
        type: "GET_COUNTRIES_SUCCESS",
        payload: r.data
      })
    )
    .catch((e) =>
      dispatch({
        type: "GET_COUNTRIES_ERROR",
        payload: e
      })
    );
};
