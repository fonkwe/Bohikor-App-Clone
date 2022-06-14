import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavBar';




const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <img src= 'image/logo.png' alt="logo"/>        
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/Features" activeStyle>
                        Features
                    </NavLink>
                    <NavLink to="/Money Therapy" activeStyle>
                        Money Therapy
                    </NavLink>
                    <NavLink to="/Bohikor Score" activeStyle>
                        Bohikor Score
                    </NavLink>
                    <NavLink to="/FAQs" activeStyle>
                        FAQs
                    </NavLink>
                    <NavLink to="/Fireside" activeStyle>
                        Fireside
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/Download">Download Bohikor</NavBtnLink>

                </NavBtn>
            </Nav>
            
        </div>
  );
};
export default Navbar