import React, {Component} from "react";
import { Card, Loader } from "semantic-ui-react";
import EmptyState from '../common/EmptyState';

import './pull.css';
export default class PullRequest extends Component {
  componentDidMount() {
    const {
      match: {
        params: {
          name = ''
        }
      },
      dispatch,
      fetchPullRequest,
    } = this.props;
    const repoName = name.replace(':', '');
    dispatch(fetchPullRequest(repoName));
  }
  render() {
    const {
      pullRequests,
      pullRequestLoading
    } = this.props;
    if (pullRequestLoading) {
      return (
        <Card style={{ minHeight: 100 }}>
          <Loader active />
        </Card>
      );
    }
    return (
      <div className='pullRequestsWrapper'>
        {
          pullRequests.length > 0 ? 
          pullRequests.map(pr => {
            const createdDate = new Date(pr.created_at).toLocaleString();
            return (
              <Card
                className={'cardWrapper'}
                key={pr.id}
              >
                <Card.Content>
                  <Card.Header>{pr.title}</Card.Header>
                  <Card.Meta>Creator: <strong>{pr.user.login}</strong></Card.Meta>
                  <Card.Meta>
                    It is created at {createdDate}
                  </Card.Meta>
                  <Card.Description>
                    Issues url:
                    <a
                      target={'_blank'}
                      rel={'nofollow noopener'}
                      href={pr.html_url}

                    >
                     {pr.html_url}
                    </a>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  Pull Request Status: {pr.state}
                </Card.Content>
              </Card>
            )
          }) : <EmptyState />
        }
      </div>
    )
  }
}