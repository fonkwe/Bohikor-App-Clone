import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
  background-color:  #3770ED;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc(100vw - 100px) / 2;
  z-index: 10;
  
  
`

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin-left: 50px;

`

export const Bars = styled(FaBars)`
   display: none;
   color: white;
   margin-left: 50px;

   @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    transform: translate(-100%, 75%);
   }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 0;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }

`
export const NavBtnLink = styled(Link)`
  border-radius: 20px;
  padding: 10px 22px;
  border: none;
  outline: none;
  text-decoration: none;
  color: white;
  background-color: #C39A77;
  margin-right: 50px;

`
