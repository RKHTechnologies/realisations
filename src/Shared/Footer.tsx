import React, { FC } from 'react';
import styled from 'styled-components';
import { SharedSettings } from '../Shared/SharedStyles';
import { ImagesDesktop } from '../Shared/ImageLib';

const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;
  /* background: #C2C2C2; */
  background: #D4D4D4;
  color: #707070;
  /* border-top: 3px solid #707070; */
  display: flex;
  align-items: center;
  justify-content: space-around;

  div:before {
    content: '';
    position: absolute;
    margin-left: -48px;
    margin-top: -10px;
    width: 40px;
    height: 40px;
    background: url(${ImagesDesktop['rkh']});
    background-size: cover;
  }

  @media(max-width: ${SharedSettings.mobile}) {
    flex-direction: column;
    padding-bottom: 15px;
    text-align: center;

    div { margin-left: 36px; }
  }
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <p>Copyright © 2nd 60th Scouts. All rights reserved.</p>
      <div>Site built by RKH Technologies</div>
    </FooterContainer>
  );
}

export default Footer;