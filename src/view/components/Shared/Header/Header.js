import React from 'react';
import styled from 'styled-components';
import { device } from '../../../../utils/screenSize';

const Header = () => {

    const MenuLinks = () => (
        <>
            <a href="#">Home</a>
            <a href="#">Properties</a>
            <a href="#">Agents</a>
            <a href="#">Blog</a>
        </>
    );

    return (
        <HeaderContainer className='section-padding'>

            <Logo>
                <img src="/img/logo.png" alt="" />
            </Logo>

            <MenuSide>

                <DesktopMenu>
                    <MenuLinks />
                </DesktopMenu>

                <ButtonWraper>
                    <Button>Login</Button>
                    <Menubar>
                        <img src="/img/icon-menu.png" alt="" />
                    </Menubar>
                </ButtonWraper>

            </MenuSide>

        </HeaderContainer>
            
    );
};

export default Header;


// styled components

const HeaderContainer = styled.header`
background: var(--section-background);
padding-top 3rem;
padding-bottom: 3rem;
display: flex;
justify-content: space-between;
align-items: center;

@media ${device.pad}{
    padding-top 1.5rem;
    padding-bottom: 1.5rem;
}
@media ${device.mobileL}{
    padding-top 1rem;
    padding-bottom: 1rem;
}
`;

const Logo = styled.div`

`;

const MenuSide = styled.div`
display: flex;
align-items: center;

`;
const DesktopMenu = styled.div`
margin-right: 60px;

@media ${device.laptop}{
    margin-right: 40px;
}
@media ${device.pad}{
    margin-right: 30px;
    
}
@media ${device.tablate}{
    display: none;
}

a{
    text-decoration: none;
    color: var(--font-primary);
    font-size: 16px;
    line-height: 24px;
    margin: 0 20px;
    font-weight: 500;
    letter-spacing: 0.02em;

    @media ${device.laptop}{
        margin: 0 15px;
    }
    @media ${device.pad}{
        margin: 0 10px;
    }
}
`;

const ButtonWraper = styled.div`
display: flex;
align-items: center;
`;
const Button = styled.button`
background: var(--theme-color);
outline: none;
border: none;
color: #fff;
padding: 13px 36px;
border-radius: 99px;
font-weight: 600;
letter-spacing: 0.02em;
cursor: pointer;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);

@media ${device.mobileM}{
    display: none;
}
`;
const Menubar = styled.div`
margin-left: 50px;
display: flex;
align-items: center;
justify-content: center;
height: 48px;
width: 48px;
border-radius: 99px;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
cursor: pointer;

@media ${device.pad}{
    margin-left: 30px;
}

img{
    
}
`;

