import React, { useState } from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import { Link, useHistory } from 'react-router-dom';

interface IProps {
    stickyHeader?: boolean;
}

interface menuProps {
    menuOpen? : boolean;
}

const HeaderNav = styled.div`
    position: ${(p: IProps) => p.stickyHeader ? "fixed" : "absolute"};
    top: ${(p: IProps) => p.stickyHeader ? "0" : "100vh"};
    box-shadow: ${(p: IProps) => p.stickyHeader ? "0 0.25rem 0.125rem 0 rgba(0,0,0,0.025)" : null};
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colours.dark};
    z-index: 2;
`;

const HeaderNavContainer = styled.div` 
    width: 100%;
    max-width: ${SharedSettings.maxWidth};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colours.dark};
    color: ${colours.light};
    transition: height 0.3s ease;

    & > img {
        height: 100px;
        margin-left: 50px;

        @media(max-width: 350px) {
            margin-left: 10px;
        }
    }

    @media(min-width: ${SharedSettings.maxWidth}) {
        left: calc(50% - ${SharedSettings.maxWidthHalf});    
    }
`;

const Logo = styled.img`
    cursor: pointer;
`;

const PageTitle = styled.div`
    color: ${colours.primary};
    font-size: 3em;
    text-transform: uppercase;
    font-weight: 600;
`;


const HeaderButton = styled.button`
    height: 100%;
    background: transparent;
    color: ${colours.light};
    cursor: pointer;
    padding: 15px 14px;
    border: none;
    border-bottom: 2px solid transparent;
    border-top: 2px solid transparent;
    font-weight: 500;
    text-decoration: none;
    
    &:hover {
      border-bottom-color: ${colours.primary};
    }

    &:focus {  
      outline: 0;
      background: ${colours.light}0d;
    }
 
    &:last-child {
        margin-right: 20px;
    } 
`;

const NavItemsRightContainer = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    transition: all 0.3s ease;

    @media( max-width: 1100px ) {
        flex-direction: column;
        align-self: flex-start;
        height: ${(p:menuProps) => p.menuOpen ? "80vh" : "0"};

        position: absolute;
        top: 100px;
        left: 20px;
        right: 20px;
        background: ${colours.primary};


        ${HeaderButton} {
            color: ${colours.light};
            text-align: center;
            font-size: 1.4em;
            padding: 0 14px;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    @media( max-width: 350px) {
        left: 5px;
        right: 5px;
    }
`;

const Burger = styled.div`
    height: 4px;
    width: 40px;
    border-radius: 2px;
    background: ${(p: menuProps) => p.menuOpen ? colours.light : colours.primary};
    transition: all 0.5s ease;
    transition-property: height, width, transform;
    position: absolute;
    top: calc(50% - 12.5px);
    left: calc(50% - 20px);
    transform: ${(p: menuProps) => p.menuOpen ? "translateY(10px) rotate(45deg)" : ""};

    &:before, &:after {
        content: '';
        position: absolute;
        height: 4px;
        width: 40px;
        border-radius: 2px;
        background: ${(p: menuProps) => p.menuOpen ? colours.light : "inherit"};
        transition: transform 0.5s ease, opacity 0.5s ease;
    }

    &:before {
        margin-top: 10px;
        transform: ${(p: menuProps) => p.menuOpen ? "translateY(-10px) rotate(180deg)" : ""};
        opacity: ${(p: menuProps) => p.menuOpen ? "0" : "1"};
    }

    &:after {
        margin-top: 20px;
        transform: ${(p: menuProps) => p.menuOpen ? "translateY(-20px) rotate(-90deg)" : ""};
    }
`;


const BurgerContainer = styled.div`
    height: 100px;
    width: 100px;
    background: ${(p: menuProps) => p.menuOpen ? colours.primary : "transparent"};
    position: relative;
    align-self: flex-end;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 20px;
    display: none;

    @media( max-width: 1100px ) {
        display: initial;
    }
    
    @media( max-width: 350px ) {
        right: 5px;
    }
`;

const HeaderBar: React.FC<IProps> = ({ stickyHeader }: IProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const history = useHistory();

    const handleNav = (link: string): void => {
        setMenuOpen(false);
        history.push(`${process.env.PUBLIC_URL}${link}`);
    }

    return (
        <HeaderNav stickyHeader={stickyHeader}>
            <HeaderNavContainer>
                <Logo src={logo} alt="Realisations Logo" onClick={() => handleNav("")} />
                {/* <PageTitle>Realisations</PageTitle> */}
                <BurgerContainer menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Burger menuOpen={menuOpen} /></BurgerContainer>
                <NavItemsRightContainer menuOpen={menuOpen}>
                    <HeaderButton onClick={() => handleNav("")}>Home</HeaderButton>
                    <HeaderButton onClick={() => handleNav("/vision-boarding")}>Vision Boarding</HeaderButton>
                    <HeaderButton onClick={() => handleNav("/events")}>Events</HeaderButton>
                    <HeaderButton onClick={() => handleNav("/life-balance-checker")}>Life Balance Checker</HeaderButton>
                    <HeaderButton onClick={() => handleNav("/about")}>About</HeaderButton>
                </NavItemsRightContainer>
            </HeaderNavContainer>
        </HeaderNav>
    );
}

export default HeaderBar;