export const FETCH_PULL_REQUEST = "FETCH_PULL_REQUEST";
export const FETCH_PULL_REQUEST_SUCCESS = "FETCH_PULL_REQUEST_SUCCESS";
export const FETCH_PULL_REQUEST_FAILED = "FETCH_PULL_REQUEST_FAILED";

export function createFetchPullRequest(repoName) {
  const url = `${process.env.REACT_APP_API_BASE}users/${repoName}/pulls`;

  return async function(dispatch) {
    dispatch({
      type: FETCH_PULL_REQUEST,
      payload: {}
    });
    try {
      const response = await fetch(url);
      const pullRequest = await response.json();

      dispatch({
        type: FETCH_PULL_REQUEST_SUCCESS,
        payload: {
            pullRequest
        }
      });
    } catch (error) {
      dispatch({
        type: FETCH_PULL_REQUEST_FAILED,
        payload: {
          error
        }
      });
    }
  };
}