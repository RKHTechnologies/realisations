import React, { FC } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { SharedSettings, colours, PageBodyContainer } from '../Shared/SharedStyles';
import { useHistory } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Contact from '../Components/Contact';
import { ImagesMobile, ImagesDesktop } from '../Shared/ImageLib';

const mobile = "1100px";

interface SectionProps {
  fullwidth?: boolean;
  lastItem?: boolean;
}

export const Section = styled.div`
  width: 100%;
  min-height: 200px;
  padding: ${(p: SectionProps) => p.fullwidth ? "20px 0 100px" : "20px 30px 100px"};
  padding-bottom: ${(p: SectionProps) => p.lastItem ? "0 !important" : null};
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  div.wrapper {
    width: 96%;
    max-width: ${SharedSettings.maxWidth};
    display: flex;
    flex-wrap: wrap;
  }

  @media(max-width: ${mobile}) {
    padding: 20px 0 50px;
  }
`;

const WelcomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-template-areas: 
    'title title groupImage'
    'text text groupImage'
    'more more more';

  @media(max-width: ${mobile}) {
    grid-template-areas: 
    'title title title'
    'text text text'
    'groupImage groupImage groupImage'
    'more more more';
  }
`;

const WelcomeTitle = styled.h1`
  grid-area: title;
  font-size: 5em;
  line-height: 1em;
  margin-bottom: 0;

  span {
    display: block;
    color: ${colours.Yellow};
  }

  @media(max-width: ${mobile}) { font-size: 3em; }
`;

const WelcomeText = styled.p`
  grid-area: text;
  font-weight: 400;
  font-size: 1.4em;

  @media(max-width: ${mobile}) { font-size: 1em; }
`;

interface ImageProps {
  image: string;
}

const GroupImage = styled.div`
  grid-area: groupImage;
  margin: 50px;
  margin-right: 0;
  background-image: url(${(p: ImageProps) => p.image});
  background-size: cover;
  background-position: center;
  min-height: 200px;
  
  @media(max-width: 1350px) { margin: 10px }
  @media(max-width: ${mobile}) { margin: 0 25% }
  @media(max-width: 700px) { margin: 0 -2% }
`;

const FindOutMore = styled.button`
  grid-area: more;
  width: 300px;
  height: 50px;
  margin: auto;
  border: 0;
  background: ${colours.Yellow};
  color: #fff;
  font-weight: 600;
  font-size: 1.2em;
  cursor: pointer;

  &:hover {
    background: ${colours.Yellow}ad;
  }

  @media(max-width: ${mobile}) {
    width: 100%;
  }
`;


const Home: FC = () => {
  const history = useHistory();
  const mobile = useMediaQuery({query: '(max-width: 470px)'});

  return (
    <PageBodyContainer>
      
      <Section id="welcome">    
        <div className="wrapper">

        </div>
      </Section>

    </PageBodyContainer>
  );
}

export default Home;