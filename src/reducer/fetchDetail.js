import {
    FETCH_DETAIL,
    FETCH_DETAIL_SUCCESS,
    FETCH_DETAIL_FAILED
  } from "../actions/fetchDetail";
  const initialState = {
    detailsData: [],
    detailLoading: false,
    error: null
  };
  
  export default function detail(state = initialState, action) {
    switch (action.type) {
      case FETCH_DETAIL: {
        return {
          ...state,
          detailLoading: true
        };
      }
  
      case FETCH_DETAIL_SUCCESS: {
        return {
          ...state,
          detailsData: action.payload.details,
          detailLoading: false
        };
      }
  
      case FETCH_DETAIL_FAILED: {
        return {
          ...state,
          error: action.payload.error,
          detailLoading: false
        };
      }
  
      default: {
        return state;
      }
    }
  }