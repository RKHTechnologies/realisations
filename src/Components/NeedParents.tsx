import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, Colour } from '../Shared/SharedStyles';
import { ImagesDesktop } from '../Shared/ImageLib';

const Container = styled.div`
  background: ${(p: IProps) => colours[p.accent]};
  display: grid;
  grid-template-columns: 20% 3fr 1fr 15%;
  grid-template-areas: 
    '. title image .'
    '. text image .';
  padding-top: 20px;
  margin-bottom: 40px;

  @media(max-width: 1350px) {
    grid-template-columns: 10% 3fr 1fr 5%;
  }

  @media(max-width: 950px) {
    grid-template-columns: 4% 3fr 1fr 1%;
  }

  @media(max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-areas: 
      'title'
      'text'
      'image';
  }
`;

const Title = styled.div`
  grid-area: title;
  width: 100%;
  font-size: 3em;
  color: ${colours.light};

  @media(max-width: 750px) {
    text-align: center;
    font-size: 2em;
  }
`;

const Text = styled.div`
  grid-area: text;
  font-weight: 400;
  font-size: 1.5em;
  margin: 10px auto 25px;
  color: ${colours.light};

  @media(max-width: 750px) {
    text-align: center;
    font-size: 1.2em;
    padding: 0 10px;
  }
`;

const Bear = styled.div`
  grid-area: image;
  height: 100%;
  width: 100%;
  background-image: url(${ImagesDesktop['rkh']});
  background-size: cover;
  background-size: contain;
  background-position: center;
  background-position-y: bottom;
  background-repeat: no-repeat;

  @media(max-width: 750px) {
    height: 150px;
  }
`;

interface IProps {
  accent: Colour;
}

const NeedParents: FC<IProps> = ({ accent }: IProps) => {
  return (
    <Container accent={accent}>
      <Title>Parents, we need you</Title>
      <Text>Help is needed in many ways and your support is essential for the group to continue running as it should. If you would like to help out a meeting or special event, please speak to the leader in charge - your child will benefit from a demonstration of your commitment to the group.</Text>
      <Bear />
    </Container>
  );
};

export default NeedParents;

