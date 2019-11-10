import React from 'react'
import { Pagination } from 'semantic-ui-react'

const PaginationWrapper = (props) => (
  <Pagination
    boundaryRange={props.boundaryRange}
    defaultActivePage={props.defaultActivePage}
    siblingRange={props.siblingRange}
    totalPages={props.totalPages}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    {...props}
  />
)

export default PaginationWrapper;