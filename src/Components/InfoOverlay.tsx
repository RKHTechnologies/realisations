import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';


const PageBlur = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  opacity: 45%;
  z-index: 2;
`;

const Card = styled.div`
  position: fixed;
  width: 800px;
  height: 100px;
  margin: auto;
  top: calc(50% - 50px);
  left: calc(50% - 400px);
  background: ${colours.Yellow};
  color: ${colours.light};
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
  font-weight: 100;
`;

const OK = styled.button`
  width: 80px;
  margin-top: 15px;
  background: ${colours.dark};
  border: none;
  color: ${colours.light};
  cursor: pointer;
  font-weight: 500;
  padding: 5px 0;
`;

interface IProps {
  open?: boolean;
  close: () => void;
  text: string;
}


const InfoOverlay: FC<IProps> = ({ open, close, text }: IProps) => {
  return (
    <>
      {open && (
        <>
          <PageBlur />
          <Card >
            {text}
            <OK onClick={close}>OK</OK>
          </Card>   
        </>
      )}   
    </>
  );
}

export default InfoOverlay;