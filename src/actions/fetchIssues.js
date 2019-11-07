export const FETCH_ISSUES = "FETCH_ISSUES";
export const FETCH_ISSUES_SUCCESS = "FETCH_ISSUES_SUCCESS";
export const FETCH_ISSUES_FAILED = "FETCH_ISSUES_FAILED";

export function createFetchIssues(repoName) {
  const url = `${process.env.REACT_APP_API_BASE}users/${repoName}/issues`;

  return async function(dispatch) {
    dispatch({
      type: FETCH_ISSUES,
      payload: {}
    });
    try {
      const response = await fetch(url);
      const issues = await response.json();

      dispatch({
        type: FETCH_ISSUES_SUCCESS,
        payload: {
          issues
        }
      });
    } catch (error) {
      dispatch({
        type: FETCH_ISSUES_FAILED,
        payload: {
          error
        }
      });
    }
  };
}