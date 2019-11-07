export const FETCH_REPO = "FETCH_REPO";
export const FETCH_REPO_SUCCESS = "FETCH_REPO_SUCCESS";
export const FETCH_REPO_FAILED = "FETCH_REPO_FAILED";

export function createFetchRepo(repoName) {
  const url = `${process.env.REACT_APP_API_BASE}users/${repoName}/repos`;

  return async function(dispatch) {
    dispatch({
      type: FETCH_REPO,
      payload: {}
    });
    try {
      const response = await fetch(url);
      const repo = await response.json();

      dispatch({
        type: FETCH_REPO_SUCCESS,
        payload: {
          repo
        }
      });
    } catch (error) {
      dispatch({
        type: FETCH_REPO_FAILED,
        payload: {
          error
        }
      });
    }
  };
}