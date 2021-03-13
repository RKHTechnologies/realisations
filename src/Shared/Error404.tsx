import React from "react";
import { PageContainer } from "../Shared/SharedStyles";
import logo from '../logo.svg';
import styled from "styled-components";

const LogoContainer = styled.img`
  max-width: 400px;
`;

const Error404: React.FC = () => {
  return (
    <PageContainer>
      <LogoContainer src={logo} alt="Realisations Logo" />
      <h1>404 - Page not found</h1>
      <p>{`Current URL: "${window.location.pathname}"`}</p>
    </PageContainer>
  );
};

export default Error404;
