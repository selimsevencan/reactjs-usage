import {
    FETCH_ISSUES,
    FETCH_ISSUES_SUCCESS,
    FETCH_ISSUES_FAILED
  } from "../actions/fetchIssues";

  const initialState = {
    issuesData: [],
    issuesLoading: false,
    error: null
  };
  
  export default function issues(state = initialState, action) {
    switch (action.type) {
      case FETCH_ISSUES: {
        return {
          ...state,
          issuesLoading: true
        };
      }
  
      case FETCH_ISSUES_SUCCESS: {
        return {
          ...state,
          issuesData: action.payload.issues,
          issuesLoading: false
        };
      }
  
      case FETCH_ISSUES_FAILED: {
        return {
          ...state,
          error: action.payload.error,
          issuesLoading: false
        };
      }
  
      default: {
        return state;
      }
    }
  }