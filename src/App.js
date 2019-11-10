import React, { Component } from "react";
import { connect } from "react-redux";
import Table from './components/Table';
import PullRequest from './components/PullRequest';
import Issues from './components/Issues';
import Detail from './components/Detail';

import { createFetchRepo } from "./actions/fetchRepo";
import { createFetchPullRequest } from './actions/fetchPullRequest';
import { createFetchIssues } from './actions/fetchIssues';
import { createFetchDetails } from './actions/fetchDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
    }
  }
  componentDidMount() {
    this.props.dispatch(this.props.fetchRepo('reactjs', this.state.page));
  }

  handlePage = (data) => {
    const {
      dispatch,
      fetchRepo
    } = this.props;
    this.setState({
      page: data.activePage,
    }, () => {
      dispatch(fetchRepo('reactjs', data.activePage))
    })
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
      fetchDetails,
      detailsData,
      detailsLoading,
    } = this.props;
    return (
      <div className="app">
        <Router>
           <Switch>
            <Route 
              path="/detail/:name/pulls"
              render={(props) =>
                <PullRequest 
                  fetchPullRequest={fetchPullRequest}
                  pullRequests={pullRequest}
                  pullRequestLoading={pullRequestLoading}
                  dispatch={this.props.dispatch}
                  {...props}
                />}
            />
            <Route 
              path="/detail/:name/issues"
              render={(props) => <Issues 
                fetchIssues={fetchIssues}
                issues={issues}
                issuesLoading={issuesLoading}
                isAuthed={true}
                dispatch={this.props.dispatch}
                {...props}
              />}  
            />
             <Route 
              path="/detail/:name"
              render={(props) => <Detail 
                isAuthed={true}
                fetchDetails={fetchDetails}
                detailsData={detailsData}
                dispatch={this.props.dispatch}
                detailsLoading={detailsLoading}
                {...props}
              />}  
            />
            <Route path="/">
              <Table
                repos={repos}
                loading={loading}
                page={this.state.page}
                handlePage={this.handlePage}
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
    pullRequest: state.pullRequest.pullRequestsData,
    pullRequestLoading: state.pullRequest.pullRequestsLoading,
    detailsData: state.detail.detailsData,
    detailsLoading: state.detail.detailLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchRepo: createFetchRepo,
    fetchPullRequest: createFetchPullRequest,
    fetchIssues: createFetchIssues,
    fetchDetails: createFetchDetails,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
