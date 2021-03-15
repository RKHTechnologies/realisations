import React, { FC } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;

  @media(max-width: 1250px) {
    grid-gap: 20px;
  }

  @media(max-width: 1100px) {
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`;

const ScoutSection: FC = () => {
  return (
    <Container>
      <Card image='rkh' primary='Beavers' secondary='6 - 8 yrs' url='/beavers' accent='Yellow' />
      <Card image='rkh' primary='Cubs' secondary='8 - 10 ½ yrs' url='/cubs' accent='Yellow' />
      <Card image='rkh' primary='Scouts' secondary='10 ½ - 14 yrs' url='/scouts' accent='Yellow' />
      <Card image='rkh' primary='Explorers' secondary='14 - 18 yrs' url='/explorers' accent='Yellow' />     
    </Container>
  );
}

export default ScoutSection;