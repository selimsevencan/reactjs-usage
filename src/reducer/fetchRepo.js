import {
    FETCH_REPO,
    FETCH_REPO_SUCCESS,
    FETCH_REPO_FAILED
  } from "../actions/fetchRepo";
  const initialState = {
    repos: [],
    reposLoading: false,
    error: null
  };
  
  export default function repos(state = initialState, action) {
    switch (action.type) {
      case FETCH_REPO: {
        return {
          ...state,
          reposLoading: true
        };
      }
  
      case FETCH_REPO_SUCCESS: {
        return {
          ...state,
          repos: action.payload.repo,
          reposLoading: false
        };
      }
  
      case FETCH_REPO_FAILED: {
        return {
          ...state,
          error: action.payload.error,
          reposLoading: false
        };
      }
  
      default: {
        return state;
      }
    }
  }