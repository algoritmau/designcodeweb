import React from 'react'
import styled from 'styled-components'

import NavItemButton from '@components/buttons/NavItemButton'

import { menuTooltipData } from 'data/navItems'

const MenuTooltip = ({ isOpen }) => (
  <Wrapper isOpen={isOpen}>
    {menuTooltipData.map((menuTooltipItem, index) => (
      <NavItemButton
        to={menuTooltipItem.link}
        imgSrc={menuTooltipItem.icon}
        imgAlt={menuTooltipItem.title}
        title={menuTooltipItem.title}
        key={index}
      />
    ))}
  </Wrapper>
)

const Wrapper = styled.div`
  background: rgb(15 14 71 / 0.32);
  box-shadow: 0 5rem 10rem rgb(8 8 8 / 0.24),
    inset 0 0 0 0.5px rgb(255 255 255 / 0.24);
  backdrop-filter: blur(var(--backdrop-blur));
  border-radius: 2rem;
  padding: 2rem;
  position: absolute;
  top: 6rem;
  right: 5.2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: start;

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0.5)};
  color: ${({ isOpen }) =>
    isOpen ? 'rgb(255 255 255 / 0.64)' : 'rgb(255 255 255 / 0.8)'};
  transition: 0.3s ease-in-out;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) =>
    isOpen
      ? 'skewY(0deg) rotate(0deg) translateY(0)'
      : 'skewY(-5deg) rotate(5deg) translateY(-30px)'};
`

export default MenuTooltip
