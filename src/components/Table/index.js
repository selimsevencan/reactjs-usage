import React from "react";
import { Table, Segment, Loader } from "semantic-ui-react";
import PaginationWrapper from '../common/Pagination';

import { Link } from "react-router-dom";
import EmptyState from "../common/EmptyState";

export default function DataTable({ 
  repos,
  loading,
  page,
  handlePage,
}) {
  if (loading) {
    return (
      <Segment style={{ minHeight: 100 }}>
        <Loader active />
      </Segment>
    );
  }
  if (!repos.length) {
    return <EmptyState />
  }
  return (
    <div className='tableWrapper'>
      <Table 
        celled
      >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell  href='#'>Repo Name</Table.HeaderCell>
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
                  <Link to={`/detail/:${item.name}`}>
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
    <PaginationWrapper
       boundaryRange={3}
       siblingRange={1}
       totalPages={3}
       activePage={page}
       onPageChange={(_, data) => {
        return handlePage(data)
       }}
    />
    </div>
  );
}