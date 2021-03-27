import React from "react";
import { colours, PageBodyContainer, PageContainer } from "../Shared/SharedStyles";
import logo from '../logo.svg';
import styled from "styled-components";
import { Section } from "./Home";
import Contact from "../Components/Contact";

const ConstructionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.img`
  max-width: 200px;
`;

const Construction = styled.h1`
  color: ${colours.primary};
  font-size: 3em;
  font-weight: 400;
  text-align: center;
`;

const SubHeading = styled.div`
  color: ${colours.light};
  font-weight: 100;
  font-size: 1.4em;
  text-align: center;
  padding: 10px;
`;



const InConstruction: React.FC = () => {
  return (
    <PageBodyContainer>
      <Section fullwidth>
        <div className="wrapper">
          <ConstructionContainer>
            <LogoContainer src={logo} alt="Realisations Logo" />
            <Construction>Website Under Construction...</Construction>
            <SubHeading>Please check back in soon</SubHeading>
            <br />
            <SubHeading>The downloads are now available at this site. To access the downloads, please use the link address quoted in the book.</SubHeading>
          </ConstructionContainer>
        </div>
      </Section>

      <Section id="ContactUs" fullwidth lastItem>
        <Contact />
      </Section>
    </PageBodyContainer>
  );
};

export default InConstruction;
