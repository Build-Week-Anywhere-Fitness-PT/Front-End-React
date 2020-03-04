import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
    background: #8DB48E;
`;
const Links = styled.div`
    display: flex;
    flex-direction: wrap;
    justify-content: space-around;
`;
const HeaderLink = styled.h2`
`;

export function Navigation() {
    return (
        <Header class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <h1 class="navbar-brand" activeStyle={{
    fontWeight: "bold",
    color: "black"
  }} exact to={'/'}>ANYWHERE FITNESS</h1>
                </div>
                <Links class="nav navbar-nav">
                    {/* <HeaderLink><NavLink exact to={'/'}>Home</NavLink></HeaderLink> */}
                    <HeaderLink><NavLink to={'/SignUp'}>Sign-Up</NavLink></HeaderLink>
                    <HeaderLink><NavLink to={'/'}>Log In</NavLink></HeaderLink>
                </Links>
            </div>
        </Header>
    )
}
export default Navigation;