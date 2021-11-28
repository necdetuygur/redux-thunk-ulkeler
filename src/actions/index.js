import axios from "axios";

export const getCountries = () => (dispatch) => {
  dispatch({
    type: "GET_COUNTRIES_START"
  });
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

  axios.get("https://thegold1.herokuapp.com/ikd").then((r) =>
    dispatch({
      type: "GET_IKD",
      payload: r.data
    })
  );
};
