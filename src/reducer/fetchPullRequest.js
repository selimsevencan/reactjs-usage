import {
    FETCH_PULL_REQUEST,
    FETCH_PULL_REQUEST_SUCCESS,
    FETCH_PULL_REQUEST_FAILED
  } from "../actions/fetchPullRequest";
  const initialState = {
    pullRequestsData: [],
    pullRequestsLoading: false,
    error: null
  };
  
  export default function pullRequests(state = initialState, action) {
    switch (action.type) {
      case FETCH_PULL_REQUEST: {
        return {
          ...state,
          pullRequestsLoading: true
        };
      }
  
      case FETCH_PULL_REQUEST_SUCCESS: {
        return {
          ...state,
          pullRequestsData: action.payload.pullRequests,
          pullRequestsLoading: false
        };
      }
  
      case FETCH_PULL_REQUEST_FAILED: {
        return {
          ...state,
          error: action.payload.error,
          pullRequestsLoading: false
        };
      }
  
      default: {
        return state;
      }
    }
  }