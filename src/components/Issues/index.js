import React, {Component} from "react";
import { Card, Loader } from "semantic-ui-react";
import EmptyState from '../common/EmptyState';
import './card.css';
export default class Issues extends Component {
  componentDidMount() {
    const {
      match: {
        params: {
          name = ''
        }
      },
      dispatch,
      fetchIssues,
    } = this.props;
    const repoName = name.replace(':', '');
    dispatch(fetchIssues(repoName));
  }
  render() {
    const {
      issues,
      issuesLoading,
    } = this.props;
    if (issuesLoading) {
      return (
        <Card style={{ minHeight: 100 }}>
          <Loader active />
        </Card>
      );
    }
    return (
      <div className='issuesWrapper'>
      {
        issues.length > 0 ? 
        issues.map(issue => {
          const createdDate = new Date(issue.created_at).toLocaleString();
          return (
            <Card
              className={'cardWrapper'}
              key={issue.id}
            >
              <Card.Content>
                <Card.Header>{issue.title}</Card.Header>
                <Card.Meta>Creator: <strong>{issue.user.login}</strong></Card.Meta>
                <Card.Meta>
                  It is created at {createdDate}
                </Card.Meta>
                <Card.Description>
                  Issues url:
                  <a
                    target={'_blank'}
                    rel={'nofollow noopener'}
                    href={issue.url}

                  >
                   {issue.url}
                  </a>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                Pull Request Status: {issue.state}
              </Card.Content>
            </Card>
          )
        }) : <EmptyState />
      }
    </div>
    )
  }
}