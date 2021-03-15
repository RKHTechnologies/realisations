import React, { FC } from 'react';
import styled from 'styled-components';
import { PageBodyContainer } from '../Shared/SharedStyles';
import { Section } from './Home';
import Document from '../Components/Document';

const DocumentsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Book: FC = () => {
  return (
    <PageBodyContainer>
      
      <Section id="Documents">
        <div className="wrapper">
          <DocumentsContainer>
            <Document name="Document 1" description="Realisations Life balance wheel" filename="1 - REALISATIONS Life Balance Wheel.pdf" accent="Yellow" />
            <Document name="Document 2" description="Realisations Life balance wheel" filename="1 - REALISATIONS Life Balance Wheel.pdf" accent="Yellow" />
            <Document name="Document 3" description="Realisations Life balance wheel" filename="1 - REALISATIONS Life Balance Wheel.pdf" accent="Yellow" />
            <Document name="Document 4" description="Realisations Life balance wheel" filename="1 - REALISATIONS Life Balance Wheel.pdf" accent="Yellow" />
            <Document name="Document 5" description="Realisations Life balance wheel" filename="1 - REALISATIONS Life Balance Wheel.pdf" accent="Yellow" />
            <Document name="Document 6" description="Realisations Life balance wheel" filename="1 - REALISATIONS Life Balance Wheel.pdf" accent="Yellow" />
            <Document name="Document 7" description="Realisations Life balance wheel" filename="1 - REALISATIONS Life Balance Wheel.pdf" accent="Yellow" />
            <Document name="Document 8" description="Realisations Life balance wheel" filename="1 - REALISATIONS Life Balance Wheel.pdf" accent="Yellow" />
          </DocumentsContainer>
        </div>
      </Section>
   </PageBodyContainer>
  );
}

export default Book;