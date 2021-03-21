import React from "react";
import { colours, PageContainer } from "../Shared/SharedStyles";
import logo from '../logo.svg';
import styled from "styled-components";

const LogoContainer = styled.img`
  max-width: 200px;
`;

const Construction = styled.h1`
  color: ${colours.primary};
  font-size: 3em;
  font-weight: 400;
`;

const SubHeading = styled.div`
  color: ${colours.light};
  font-weight: 100;
  font-size: 1.4em;
`;



const InConstruction: React.FC = () => {
  return (
    <PageContainer>
      <LogoContainer src={logo} alt="Realisations Logo" />
      <Construction>Website Under Construction...</Construction>
      <SubHeading>Please check back in soon</SubHeading>
    </PageContainer>
  );
};

export default InConstruction;
