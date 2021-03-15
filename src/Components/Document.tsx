import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colours, Colour, SharedSettings } from '../Shared/SharedStyles';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const DocumentContainer = styled.a`
  width: 100%;
  margin: auto;
  background: ${colours.dark};
  box-sizing: border-box;
  text-decoration: none;
  color: ${colours.light};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-template-areas: 
    'icon name'
    'icon description';
  transition: all 0.1s ease;

  &:hover {
    background: #464646;
    box-shadow: 0 0.25rem 0.125rem 0 rgb(0 0 0 / 8%);
  }

  @media(max-width: ${SharedSettings.mobile}) {
    width: 96%;
  }
`;

interface IconProps {
  accent: Colour;
}

const PDFIcon = styled(FontAwesomeIcon)`
  grid-area: icon;
  height: 50px;
  padding: 20px;
  color: ${(p: IconProps) => colours[p.accent]};
`;

const Name = styled.div`
  grid-area: name;
  font-size: 1.6em;
  font-weight: 400;
  margin-top: 11px;
  margin-left: -1px;
`;

const Description = styled.div`
  grid-area: description;
  margin-bottom: 14px;
  font-weight: 200;
`;


interface IProps {
  name: string;
  description: string;
  filename: string;
  accent: Colour;
}

const Document: FC<IProps> = ({ name, description, filename, accent }: IProps) => {
  debugger;
  return (
    <DocumentContainer href={require(`../documents/${filename}`)} target="_blank" rel="noreferrer noopener">
      <PDFIcon icon={faFileAlt} size="4x" accent={accent} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </DocumentContainer>
  );
}

export default Document;