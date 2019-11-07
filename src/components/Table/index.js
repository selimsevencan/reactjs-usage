import React from "react";
import { Table, Segment, Loader } from "semantic-ui-react";

import { Link } from "react-router-dom";

export default function DataTable({ repos, loading }) {
  if (loading) {
    return (
      <Segment style={{ minHeight: 100 }}>
        <Loader active />
      </Segment>
    );
  }
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Repo Name</Table.HeaderCell>
          <Table.HeaderCell>Repo Link</Table.HeaderCell>
          <Table.HeaderCell>Programming Language</Table.HeaderCell>
          <Table.HeaderCell>License Name</Table.HeaderCell>
          <Table.HeaderCell>Star Count</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {repos.map(item => {
          const hasLicense = item.license && !!Object.keys(item.license).length;
          return (
            <Table.Row key={item.id}>
              <Table.Cell>
                  <Link to={`/issues/:${item.name}`}>
                    {item.name}
                  </Link>
              </Table.Cell>
              <Table.Cell>
                <a
                  target={"_blank"}
                  href={item.html_url}
                  rel="nofollow noopener"
                >
                  {item.html_url}
                </a>
              </Table.Cell>
              <Table.Cell>{item.language}</Table.Cell>
              <Table.Cell>{hasLicense && item.license.name}</Table.Cell>
              <Table.Cell>{item.stargazers_count}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}