
import { truncate } from 'node:fs'
import { useState, useEffect } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyle'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBTn,
    NavItemBTnLink
} from './Navbar.elements'





const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    useEffect(() => {
        showButton()
    }, [])

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    const closeMobileMenu = () => {
        setClick(false)
    }

    window.addEventListener('resize', showButton)

    const handleClick = () => setClick(!click)



    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }} >
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu} >
                            <NavIcon />
                        Ultra
                    </NavLogo>

                        <MobileIcon onClick={handleClick}>
                            {console.log(click)}
                            {click ? <FaTimes /> : <FaBars />}

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
                                <NavLinks to='/products'>
                                    Products
                           </NavLinks>

                            </NavItem>

                            <NavItem>
                                <NavLinks to='/'>
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItemBTn>
                                {Button ? (
                                    <NavItemBTnLink to="/sign-up">
                                        <Button >
                                            SIGN UP
                                        </Button>
                                    </NavItemBTnLink>
                                ) : (
                                    <NavItemBTnLink to="/sign-up">
                                        <Button >
                                            SIGN UP
                                        </Button>
                                    </NavItemBTnLink>
                                )

                                }

                            </NavItemBTn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider >
        </>
    )
}

export default Navbar
