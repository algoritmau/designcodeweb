import React, { useState } from 'react'
import styled from 'styled-components'

import NavItemButton from '@components/buttons/NavItemButton'
import MenuTooltip from '@components/tooltips/MenuTooltip'

import { navItems } from 'data/navItems'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleAccountClick = event => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <HeaderWrapper>
      <img src="/images/logos/logo.svg" alt="logo" />
      <NavWrapper>
        {navItems.map((item, index) => (
          <NavItemButton
            key={index}
            to={item.link === '/account' ? '' : item.link}
            imgSrc={item.icon}
            imgAlt={item.title}
            title={item.title}
            onClick={
              item.link === '/account'
                ? event => handleAccountClick(event)
                : null
            }
          />
        ))}
      </NavWrapper>
      <HamburgerWrapper>
        <NavItemButton
          to=""
          imgSrc="/images/icons/hamburger.svg"
          imgAlt="hamburger"
          title=""
          onClick={event => handleAccountClick(event)}
        />
      </HamburgerWrapper>
      <MenuTooltip isOpen={isOpen} />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: absolute;
  top: 60px;
  width: 100%;
  padding: 0 5.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    padding: 0 4rem;
    top: 4rem;
  }
`

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  a {
    display: none;
  }
`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default Header
