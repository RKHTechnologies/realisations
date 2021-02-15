import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings, Colour } from '../Shared/SharedStyles';
import { useHistory } from 'react-router-dom';
import {ImagesDesktop, imageLib} from '../Shared/ImageLib';

const JumboCardContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'side image image'
    'side image image'
    'side image image';

  h3 {
      grid-area: title;
      font-size: 3em;
      margin: 5px 0;
      max-width: 256px;
  }
  p {
    grid-area: text;
    font-weight: 400;
    color: ${colours.light};
    width: 100%;
    font-size: 0.9em;
  }

  @media(max-width: 1380px) {
    h3 { font-size: 2.6em; }
  }

  @media(max-width: 1260px) {
    width: 90%;
  }

  @media(max-width: 1180px) {
    width: 95%;
  }


  @media(max-width: ${SharedSettings.mobile}) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-areas: 
      'side'
      'image';

    h3 {
      font-size: 2em;
      max-width: none;
      margin: 10px auto 0;
    }

    p {
      text-align: center;
    }
  }
`;

const SideContainer = styled.div`
  grid-area: side;
  background: ${colours.Blue};
  color: ${colours.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  padding: 25px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    border-top: 22px solid transparent;
    border-bottom: 22px solid transparent;
    border-left: 22px solid ${colours.Blue};
    right: -22px;
    top: calc(50% - 22px);
  }

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 10px;
    text-align: center;
    
    &:after {
      border-top: 22px solid ${colours.Blue};
      border-bottom: none;
      border-left: 22px solid transparent;
      border-right: 22px solid transparent;
      right: calc(50% - 22px);
      bottom: -22px;
      top: auto;
    }
  }
`;

const Button = styled.button`
  grid-area: joinUs;
  padding: 14px 35px;
  margin-top: 20px;
  border: 0;
  background: #fff;
  color: ${colours.dark};
  font-size: 1.05em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colours.Yellow};
  }

  @media(max-width: ${SharedSettings.mobile}) {
    margin: 4px auto 6px;
  }
`;

interface ImageProps {
  image: imageLib;
}

const MainImage = styled.div`
  grid-area: image;
  background: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  height: 500px;

  @media(max-width: ${SharedSettings.mobile}) {
    height: 300px;

  }  
`;

interface IProps {
  title: string,
  text: string
  buttonText: string,
  link: string,
  colour: Colour,
  image: imageLib,
}

const JumboCard: FC<IProps> = ({ title, text, buttonText, link, colour, image }: IProps) => {
  
  const handleScroll = () => {
    window.scrollTo({
      left: 0,
      top: document.getElementById('ContactUs')?.offsetTop ?? 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      <JumboCardContainer>
        <SideContainer>
          <h3>{title}</h3>
          <p>{text}</p>
          <Button onClick={handleScroll}>{buttonText}</Button>
        </SideContainer>
        <MainImage image={image}/>
      </JumboCardContainer>
    </>
  );
}

export default JumboCard;