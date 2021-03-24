import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, PageBodyContainer, SharedSettings } from '../Shared/SharedStyles';
import { Section } from './Home';
import Document from '../Components/Document';

const Title = styled.h1`
  color: ${colours.light};
  font-size: 4em;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 3em;
  }

  @media(max-width: 320px) {
    font-size: 2em;
  }
`;

const Description = styled.div`
  color: ${colours.light};
  font-size: 1em;
  text-align: center;
  width: 100%;
  font-weight: 400;

  span {
    font-size: 1.3em;
    font-weight: 400;
  }

  b {
    font-size: 1.2em;
  }

  @media(max-width: 400px) {
    font-size: 0.8em;
  }
`;


interface ContainerProps {
  fullWidth?: boolean;
}

const DocumentsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  width: 100%;

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const DocumentsGroup = styled.div`
  width: 100%;
  grid-column: ${(p: ContainerProps) => p.fullWidth ? "1 / -1" : ""};
  margin: 25px 0;
  display: flex;
  flex-wrap: wrap;

  @media(max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;

const GroupHeader = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2em;
  font-weight: 400;
  color: ${colours.light};
  margin-bottom: 20px;
`;

const Book: FC = () => {
  return (
    <PageBodyContainer>
      <Section id="Title" lastItem>
        <div className="wrapper">
          <Title>Realisations Downloads</Title>
          <Description>
            <span>Welcome to Realisations and the documents downloads to support your journey through the Realisations process.</span><br /><br />
            <b>What to do with the downloads:</b><br />
            Documents 1 through to 8 - Print hard copies of these are for the written work. At this stage, hand written notes are best. <br />
            Electronic Visbo – After completing your manual VisBo, you can use this Microsoft Word template to create your electronic VisBo (eVisBo) with pictures and text boxes.
          </Description>
        </div>
      </Section>


      <Section id="Documents">
        <div className="wrapper">
          <DocumentsContainer>

            <DocumentsGroup fullWidth>
              <GroupHeader>Main Documents</GroupHeader>
              <Document name="Document 1" description="Life balance wheel" icon="PDF" filename="1 - Realisations Life Balance Wheel.pdf" accent="Yellow" />
              <Document name="Document 2" description="Wheel history sheet" icon="PDF" filename="2 - Realisations wheel history sheet.pdf" accent="Yellow" />
              <Document name="Document 3" description="Rapid Goal Dump" icon="PDF" filename="3 - Realisations Rapid Goal Dump.pdf" accent="Yellow" />
              <Document name="Document 4" description="VisBo blank (hand written)" icon="PDF" filename="4 - Realisations VisBo blank (hand written).pdf" accent="Yellow" />
              <Document name="Document 5" description="Goals Prompt Sheet" icon="PDF" filename="5 - Realisations Goals Prompt Sheet.pdf" accent="Yellow" />
              <Document name="Document 6" description="Goals Table" icon="PDF" filename="6 - Realisations Goals Table (shortlist of 6) - What Why When.pdf" accent="Yellow" />
              <Document name="Document 7" description="Gratitude Blank" icon="PDF" filename="7 - Realisations Gratitude Blank.pdf" accent="Yellow" />
              <Document name="Document 8" description="Gratitude Prompt Sheet" icon="PDF" filename="8 - Realisations Gratitude Prompt Sheet.pdf" accent="Yellow" />
              <Document name="Electronic VisBo" description="Download and fill in on device" icon="word" filename="Realisations Electronic VisBo.doc" accent="Yellow" />
            </DocumentsGroup>

            <DocumentsGroup>
              <GroupHeader>Poster</GroupHeader>
              <Document name="Realisations Poster" description="A4 Minimum Resolution" icon="PDF" filename="Realisations poster A4 min res.pdf" accent="Yellow" />
            </DocumentsGroup>

            <DocumentsGroup>
              <GroupHeader>All Downloads</GroupHeader>
              <Document name="All Downloads" description="Zip File with all downloads" icon="zip" filename="All Realisations Downloads.zip" accent="Yellow" />
            </DocumentsGroup>
          </DocumentsContainer>
        </div>
      </Section>
   </PageBodyContainer>
  );
}

export default Book;