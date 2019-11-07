import styled from '@emotion/styled';
import { bool } from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import mediaqueries from "@styles/media";

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
        <Label>Topics</Label>
        <MenuLink to='/latest'>Latest</MenuLink>
        <MenuLink to='/category/thoughts'>Thoughts</MenuLink>
        <MenuLink to='/category/culture'>Culture</MenuLink>
        <MenuLink to='/category/goings-on'>Goings On</MenuLink>
        <StyledDiv>
          <SecondaryLink>Home</SecondaryLink>
          <Spacer>/</Spacer>
          <SecondaryLink>Contact</SecondaryLink>
      </StyledDiv>
      </StyledMenu>
      
    )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;



const Spacer = styled.span`
  color: #aa9bf5;
  font-family: "F Grotesk";
  font-size: 20px;
  padding: 0px 10px 0px 10px;
`;
const StyledMenu = styled.div`
  width: 100vw;
  display: flex;
  transform: ${({ open }) => open ? 'translateX(0vw)' : 'translateX(-100vw)'};
  flex-direction: column;
  justify-content: center;
  z-index: 4000;
  background: rgba(224, 220, 238, 0.95);
  height: 100vh;
  text-align: center;
  padding-left: 0px;
  position: relative;
  transition: all 0.3s ease-in-out;
 
  ${mediaqueries.tablet`
    width: 100vw;
    background: rgb(211,209,219);
  `}
`;

const Label = styled.p`
  font-family: "F Grotesk";
  font-weight: 400;
  font-size: 20px;
  padding-bottom: 10px;
  text-transform: uppercase;
  color: #4524ea;
  ${mediaqueries.tablet`
    font-size: 18px;
    background: rgb(211,209,219);
  `}
`;

const MenuLink = styled(Link)`
  font-family: "Noe Display";
  font-weight: 500;
  font-size: 74px;
  color: #4524ea;
  font-style: normal;
  border-width: 50%;
  text-transform: none;
  transition: all 0.08s linear;
  &:hover {
    text-shadow: 
                 2px 2px 10px #fff;
  }
  ${mediaqueries.tablet`
    font-size: 52px;
    background: rgb(211,209,219);
  `}
`;

const StyledDiv = styled.div`
  padding-top: 20px;
  font-size: 14px;
  text-transform: uppercase;
  float: center;
  text-align: center;
  align-items: center;
  margin-right: 0px;
`
const SecondaryLink = styled(Link)`
  font-family: "F Grotesk";
  font-size: 20px;
  font-weight: 400;
  color: #4524ea;
  &:hover {
    border-bottom: 1px solid;
  }
  ${mediaqueries.tablet`
    font-size: 18px;
    background: rgb(211,209,219);
  `}
`;