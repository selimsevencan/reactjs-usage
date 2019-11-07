  
import { combineReducers } from "redux";
import repos from "./fetchRepo";
import issues from './fetchIssues';
import pullRequest from './fetchPullRequest';

export default combineReducers({
  repos,
  pullRequest,
  issues,
});