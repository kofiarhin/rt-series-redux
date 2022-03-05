import camelize from "camelize";
import { transformData } from "../../utils/helper";
import {
  GET_DATA_FAILED,
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
  INCREASE_PAGE_NUMBER,
  GET_DETAILS_SUCCESS,
} from "../constants";
export const getDetails = (id) => (dispatch) => {
  dispatch({
    type: GET_DATA_PENDING,
  });

  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US`;

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: GET_DETAILS_SUCCESS,
        payload: transformData(result),
      });
    });
};
export const getSeries =
  (pageNumber = 1) =>
  (dispatch) => {
    dispatch({
      type: GET_DATA_PENDING,
    });

    const url = `https://api.themoviedb.org/3/search/tv?query=suits&api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US&page=${pageNumber}&include_adult=false`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: GET_DATA_SUCCESS,
          payload: transformData(result.results),
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DATA_FAILED,
          payload: error,
        });
      });
  };

export const increasePageNumber = () => {
  return {
    type: INCREASE_PAGE_NUMBER,
  };
};
