import React, {Component} from "react";
import { Card, Loader } from "semantic-ui-react";
import EmptyState from '../common/EmptyState';

import { Link } from "react-router-dom";

export default class Detail extends Component {
  componentDidMount() {
    const {
        location: {
          pathname = ''
        },
        dispatch,
        fetchDetails,
      } = this.props;
      const repoName = pathname.replace('/detail/:', '');
      dispatch(fetchDetails(repoName));
  }
  render() {
    const {
      detailsLoading,
      detailsData,
    } = this.props;
    if (detailsLoading) {
      return (
        <Card style={{ minHeight: 100 }}>
          <Loader active />
        </Card>
      );
    }
    if (!detailsData) {
      return <EmptyState />
    }
    const createdDate = new Date(detailsData.created_at).toLocaleString();
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            <a
              target={'_blank'}
              rel={'nofollow noopener'}
              href={detailsData.html_url}
            >
              {detailsData.name}
            </a>
          </Card.Header>
          <Card.Meta>{detailsData.description}</Card.Meta>
          <Card.Description>
          <Link to={`/detail/:${detailsData.name}/pulls`}>
           See the pull requests
          </Link>
          </Card.Description>
          <Card.Description>
            <Link to={`/detail/:${detailsData.name}/issues`}>
            See the issues
            </Link>
          </Card.Description>
          <Card.Description><strong>{detailsData.name}</strong> is created at {createdDate}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>Language: {detailsData.language}</p>
          <p>Star count: {detailsData.stargazers_count}</p>
          <p>Open Issues count: {detailsData.open_issues}</p>
          <p>Forks count: {detailsData.forks_count}</p>
        </Card.Content>
      </Card>
    )
  }
}