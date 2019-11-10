export const FETCH_DETAIL = "FETCH_DETAIL";
export const FETCH_DETAIL_SUCCESS = "FETCH_DETAIL_SUCCESS";
export const FETCH_DETAIL_FAILED = "FETCH_DETAIL_FAILED";

export function createFetchDetails(repoName) {
  const url = `${process.env.REACT_APP_API_BASE}repos/reactjs/${repoName}`;
  return async function(dispatch) {
    dispatch({
      type: FETCH_DETAIL,
      payload: {}
    });
    try {
      const response = await fetch(url);
      const details = await response.json();
      dispatch({
        type: FETCH_DETAIL_SUCCESS,
        payload: {
          details
        }
      });
    } catch (error) {
      dispatch({
        type: FETCH_DETAIL_FAILED,
        payload: {
          error
        }
      });
    }
  };
}
