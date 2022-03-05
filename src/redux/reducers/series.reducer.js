import {
  GET_DATA_SUCCESS,
  GET_DATA_PENDING,
  GET_DATA_FAILED,
  INCREASE_PAGE_NUMBER,
  GET_DETAILS_SUCCESS,
} from "../constants";

const initialState = {
  seriesData: [],
  isPending: true,
  error: "",
  pageNumber: 1,
  details: {},
};

const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS_SUCCESS:
      return { ...state, isPending: false, details: action.payload };
    case INCREASE_PAGE_NUMBER:
      return { ...state, pageNumber: state.pageNumber + 1 };
    case GET_DATA_FAILED:
      return { ...state, isPending: false, error: action.payload };
    case GET_DATA_SUCCESS:
      return { ...state, seriesData: action.payload, isPending: false };
    case GET_DATA_PENDING:
      return { ...state, isPending: true };
    default:
      return state;
  }
};

export default seriesReducer;
