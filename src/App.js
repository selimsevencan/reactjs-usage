import React, { Component } from "react";
import { connect } from "react-redux";
import Table from './components/Table';
import PullRequest from './components/PullRequest';
import Issues from './components/Issues';

import { createFetchRepo } from "./actions/fetchRepo";
import { createFetchPullRequest } from './actions/fetchPullRequest';
import { createFetchIssues } from './actions/fetchIssues';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(this.props.fetchRepo('reactjs'));
  }
  render() {
    const {
      loading,
      repos,
      fetchPullRequest,
      pullRequest,
      pullRequestLoading,
      fetchIssues,
      issues,
      issuesLoading,
    } = this.props;
    return (
      <div className="app">
        <Router>
           <Switch>
            <Route path="/pull-request/:pr">
              <PullRequest 
                fetchPullRequest={fetchPullRequest}
                pullRequest={pullRequest}
                pullRequestLoading={pullRequestLoading}
              />
            </Route>
            <Route path="/issues/:name">
              <Issues 
                fetchIssues={fetchIssues}
                issues={issues}
                issuesLoading={issuesLoading}
              />
            </Route>
            <Route path="/">
              <Table
                repos={repos}
                loading={loading}
              />
          </Route>
        </Switch>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos.repos,
    loading: state.repos.reposLoading,
    issues: state.issues.issuesData,
    issuesLoading: state.issues.issuesLoading,
    pullRequest: state.pullRequest.pullRequestData,
    pullRequestLoading: state.pullRequest.pullRequestsLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchRepo: createFetchRepo,
    fetchPullRequest: createFetchPullRequest,
    fetchIssues: createFetchIssues,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
