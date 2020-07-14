import styled from "styled-components"
import media from "styled-media-query"

import myImage from "../../images/sidebar_flowers.png"

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  background-image: url(${myImage});
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 50%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("large")`
    aling-items: flex-start;
    border-bottom: 1px solid var(--borders);
    border-right: none;
    background: var(--mobileMediumBackground);
    height: auto;
    padding: 1rem 2rem;
    width: 100%;
  `}
`
