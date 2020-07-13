import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
    {!isFirst ? (
      <AniLink cover direction="left" bg="#001628" duration={0.6} to={prevPage}>
        ← Previous Page
      </AniLink>
    ) : (
      <span>← Previous Page</span>
    )}
    <p>
      {currentPage} of {numPages}
    </p>
    {!isLast ? (
      <AniLink cover direction="right" bg="#001628" duration={0.6} to={nextPage}>
        Next Page →
      </AniLink>
    ) : (
      <span>Next Page →</span>
    )}
  </S.PaginationWrapper>
)

Pagination.prototypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
