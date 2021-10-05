import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavItemButton = ({ to, imgSrc, imgAlt, title, onClick }) => {
  return (
    <Link to={to}>
      <NavItem onClick={onClick}>
        <img src={imgSrc} alt={imgAlt} />
        {title && <span>{title}</span>}
      </NavItem>
    </Link>
  )
}

const NavItem = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: rgb(8 8 8 / 0.01);
  color: rgb(255 255 255 / 0.64);
  font-size: 1.6rem;
  padding: 1.4rem 1.2rem;
  border-radius: 0.8rem;
  transition: 0.5s ease-out;
  cursor: pointer;

  :hover {
    color: rgb(255 255 255 / 0.48);
    background: rgb(8 8 8 / 0.06);
    box-shadow: 0 1rem 2rem rgb(8 8 8 / 0.1),
      inset 0 0 0 0.5px rgb(255 255 255 / 0.2);
  }
`

export default NavItemButton
