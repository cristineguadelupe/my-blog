import React from "react"
import propTypes from "prop-types"
import { Link } from "gatsby"

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst ? <Link to={prevPage}>Previous Page</Link> : <span>Previous Page</span>}
    <p>
      {currentPage} of {numPages}
    </p>
    {!isLast ? <Link to={nextPage}>Next Page</Link> : <span>Next Page</span>}
  </S.PaginationWrapper>
)

Pagination.prototypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
