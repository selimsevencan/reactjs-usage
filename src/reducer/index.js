  
import { combineReducers } from "redux";
import repos from "./fetchRepo";
import issues from './fetchIssues';
import pullRequest from './fetchPullRequest';
import detail from './fetchDetail';

export default combineReducers({
  repos,
  pullRequest,
  issues,
  detail,
});