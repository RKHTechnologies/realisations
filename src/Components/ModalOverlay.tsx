import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, Colour, SharedSettings } from '../Shared/SharedStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMapMarkerAlt, faCalendarDay, faClock } from '@fortawesome/free-solid-svg-icons';

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

interface ICardProps {
  open: boolean;
}
const MainCard = styled.div`
  position: fixed;
  transition: all 0.2s ease;
  /* width: ${(p: ICardProps) => p.open ? "40%" : 0};*/
  width: 40%;
  height: ${(p: ICardProps) => p.open ? "50%" : 0};
  top: ${(p: ICardProps) => p.open ? "24%" : "-10%"};;
  left: 30%;
  z-index: 3;
  background: #f1f1f1;
  overflow: hidden;

  @media(max-width: ${SharedSettings.mobile}) {
    width: 96%;
    left: 2%;
    height: ${(p: ICardProps) => p.open ? "90%" : 0};
    top: ${(p: ICardProps) => p.open ? "5%" : "-10%"};;
  }
`;


interface IHeaderProps {
  open: boolean;
  background: Colour;
}
const Header = styled.div`
  background: ${(p: IHeaderProps) => colours[p.background]};
  transition: all 0.3s ease;
  color: white;
  min-height: ${(p: IHeaderProps) => p.open ? "70px" : 0};
  padding: 12px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  box-sizing: border-box;
  font-size: ${(p: IHeaderProps) => p.open ? "2em" : 0};
  font-weight: 300;
  position: relative;
  overflow: hidden;
  line-height: 30px;
`;

const Close = styled.div`
  width: 40px;
  height: 40px;
  width: 50px;
  border-radius: 6px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background: #ffffff5e;
  }
`;


interface IDescriptionProps {
  open: boolean;
  accent: Colour;
}

const Description = styled.div`
  font-size: ${(p: IDescriptionProps) => p.open ? "1em" : 0};
  font-weight: 100;
  padding: 30px;
  overflow: hidden;

  div {
    font-weight: 100;
    padding-top: 30px;

    svg {
      margin-right: 10px;
      margin-bottom: -7px;
      margin-top: 2px;
      color: ${(p: IDescriptionProps) => colours[p.accent]};
    }
  }

  span {
    font-weight: 100;
  }
`;



interface IProps {
  open: boolean;
  close(): void;
  title: string;
  description: string;
  accent: Colour;
  startDate: string;
  endDate: string;
  time: string;
  location: string;
}

const ModalOverlay: FC<IProps> = ({ open, close, title, description, accent, startDate, endDate, time, location }: IProps) => {
  return (
    <>
      {open && <PageBlur />}
      <MainCard open={open}>
        <Header open={open} background={accent}>
          {title}
          <Close onClick={close}>
            <FontAwesomeIcon icon={faTimes} />
          </Close>
        </Header>
        <Description open={open} accent={accent}>
          {description} 
          <div>
            <FontAwesomeIcon icon={faCalendarDay} size="2x" />
            {startDate} {endDate && (endDate !== "Invalid date") && (<span>- {endDate}</span>)}
          </div>
          
          {time && (<div>
            <FontAwesomeIcon icon={faClock} size="2x" />
            {time}
          </div>)}

          {location && <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
            {location}
          </div>}
        </Description>
      </MainCard>
    </>
  );
}

export default ModalOverlay;