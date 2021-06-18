import React, {useState, useEffect} from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {HeaderImg, Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtnLink,
    NavItemBtn
} from '../Navbar/NavbarElements'
import  image from '../../images/logo.png'
import { Button } from '../../GlobalStyle'



const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

 

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if(window.innerWidth <=960){
        setButton(false);
    }else{
        setButton(true);
    }
}
useEffect(() =>{
    showButton()
}, []);
window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
          <Nav>
                <NavbarContainer>
                <NavLogo to="/">
                    <HeaderImg src={image}/>
                </NavLogo>
                <MobileIcon onClick={handleClick} >
                    {click ? <FaTimes/> :<FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/services'>
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/product'>
                            Products
                        </NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to="/contact">
                                <Button primary>Contact</Button>
                                </NavBtnLink>
                        ):( <NavBtnLink to="/contact">
                        <Button fontBig primary>Contact</Button>
                        </NavBtnLink>)}

                    </NavItemBtn>

                </NavMenu>
 
                </NavbarContainer>
          </Nav>
          </IconContext.Provider>
        </>
    )
}

export default Navbar
