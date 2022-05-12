import React from 'react';
import styled from 'styled-components';
import { device } from '../../../../utils/screenSize';



const SideMenu = (props) => {

    const { isOpen, setIsOpen } = props;

    return (
        <Container isOpen={isOpen}>

            <Top>
                <Logo>
                    <img src="/img/logo.png" alt="" />
                </Logo>

                <MenuIcon onClick={() => setIsOpen(false)}>
                    <img src="/img/icon-menu.png" alt="" />
                </MenuIcon>
            </Top>

            <MenuLinks>
                {
                    props.children
                }
            </MenuLinks>

            <ButtonWraper>
                <LoginBtn>Login</LoginBtn>
            </ButtonWraper>

        </Container>
    );
};

export default SideMenu;




const Container = styled.div`
position: fixed;
top: 0px;
right: 0px;
bottom: 0px;
width: 320px;
z-index: 99;
background: var(--section-background);
box-shadow: 0px 2px 4px rgb(0 0 0 / 8%);
transition: transform .3s;
transform: ${props => props.isOpen ? 'translateX(0)' : "translateX(100%)"};

@media ${device.mobileL}{
    width: auto;
    left: 0px;
}
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 3rem  3rem 3rem 1rem;

@media ${device.pad}{
    padding: 1.5rem 3rem 1.5rem 2rem;
}
@media ${device.mobileL}{
    padding: 1rem 1rem 1rem 2rem;
}
`;

const Logo = styled.div`

`;

const MenuIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 48px;
width: 48px;
border-radius: 99px;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
cursor: pointer;
`;

const MenuLinks = styled.div`
display: flex;
flex-direction: column;
align-items: center;

a{
    text-decoration: none;
    color: var(--font-primary);
    font-size: 16px;
    line-height: 24px;
    margin: 10px 0px;
    font-weight: 500;
    letter-spacing: 0.02em;
}
`;

const ButtonWraper = styled.div`
visibility: hidden;

@media ${device.mobileM}{
    visibility: visible;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

const LoginBtn = styled.button`
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
`;