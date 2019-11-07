import React from "react";
import { Card, Image, Loader } from "semantic-ui-react";

export default function PullRequest({
  loading,
  data: {
    name = "",
    location = "",
    company = "",
    blog = "",
    bio = "",
    avatar_url = "",
    public_repos = 0
  }
}) {
  if (loading) {
    return (
      <Card style={{ minHeight: 100 }}>
        <Loader active />
      </Card>
    );
  }
  return (
    <Card>
      <Image src={avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span>{company}</span>
        </Card.Meta>
        <Card.Description>
          {location && `${name} is living in ${location}.`}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>{public_repos > 0 && `${name} has ${public_repos} public repos`}</p>
        <p>
          {blog && (
            <React.Fragment>
              <strong>{name}'s blog is </strong>
              <a href={blog} rel="nofollow noopener" target={"_blank"}>
                {blog}
              </a>
            </React.Fragment>
          )}
        </p>
        <p>{bio && `${name}'s bio is ${bio}`}</p>
      </Card.Content>
    </Card>
  );
}