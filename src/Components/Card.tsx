import React, { FC } from 'react';
import styled from 'styled-components';
import { ImagesDesktop, imageLib } from '../Shared/ImageLib';
import { colours, Colour } from '../Shared/SharedStyles';
import { useHistory } from 'react-router-dom';

interface IProps {
  image: imageLib;
  primary: string;
  secondary: string;
  url: string
  accent: Colour;
}

interface IContainerProps {
  image: imageLib;
  accent: Colour;
}

const CardContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background: url(${(p: IContainerProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${(p: IContainerProps) => colours[p.accent]};
    opacity: 0.4;
  }

  &:hover {
    transform: scale(1.15);
  }

  @media(max-width: 1100px) {
    height: 250px;
    font-size: 0.66em;
  }
`;

const PrimaryText = styled.div`
  font-size: 3em;
  font-weight: 600;
  color: ${colours.light};
  padding: 3px 0;
  z-index: 1;
  text-align: center;
  max-width: 80%;
  margin-top: 30px;
`;

const SecondaryText = styled.div`
  text-align: center;
  color: ${colours.light};
  z-index: 1;
  font-weight: 600;
  width: 90%;
  font-size: 1.2em;
`;


const Card: FC<IProps> = ({image, primary, secondary, url, accent}: IProps) => {
  const history = useHistory();
  
  return (
    <>
      <CardContainer image={image} accent={accent} onClick={() => history.push(`${process.env.PUBLIC_URL}${url}`)}>
        <PrimaryText>{primary}</PrimaryText>
        <SecondaryText>{secondary}</SecondaryText>
      </CardContainer>
    </>
  );
}

export default Card;