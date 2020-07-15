import styled from "styled-components"
import media from "styled-media-query"


export const AboutWrapper = styled.section`

`

export const AboutHeader = styled.header`
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;

  ${media.lessThan("large")`
     padding: 3rem 0 0;
     max-width: 100%;
   `}
`

export const AboutTitle = styled.h1`
  color: var(--postTitle);
  font-size: 4rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  ${media.lessThan("large")`
     font-size: 2.8rem;
     line-height: 1.1;
     padding: 0 1rem;
   `}
`
export const AboutDescription = styled.h2`
  color: var(--postDescription);
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;

  ${media.lessThan("large")`
     font-size: 1.6rem;
     line-height: 1.3;
     padding: 0 1rem;
   `}
`