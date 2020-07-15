import React from "react"
import { Web } from "@styled-icons/material-twotone/Web"

import * as S from "./styled"

const About = () => (
  <S.AboutWrapper>
    <S.AboutHeader>
      <S.AboutTitle>Hi there! I'm Cristine</S.AboutTitle>
      <S.AboutDescription>
        A Full Stack Web Developer who loves code, coffee and cats!
      </S.AboutDescription>
    </S.AboutHeader>
    <S.MainContent>
      {/* <S.AboutServicesSection>
        <S.AboutServiceItem>
          <S.AboutServiceInfo>
          <S.AboutServiceIcon><Web /></S.AboutServiceIcon>
            <h3>Real time web applications</h3>
            <p>
              Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
              Mauris convallis dictum elit id volutpat.
            </p>
          </S.AboutServiceInfo>
        </S.AboutServiceItem>
      </S.AboutServicesSection> */}
    </S.MainContent>
  </S.AboutWrapper>
)

export default About
