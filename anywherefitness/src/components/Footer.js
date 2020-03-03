import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FooterLinks = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-end;
    font-size: 12px;
`;

const Footer = () => {
    return (
        <FooterLinks class="nav navbar-nav">
                    <h3><NavLink exact to={'/'}>Home</NavLink></h3>
                    <h3>Anywhere Fitness</h3>
                    <h3><NavLink exact to={''}>Contact Us</NavLink></h3>
        </FooterLinks>
    )
};
export default Footer;