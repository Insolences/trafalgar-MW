import React from 'react';
import styled from 'styled-components';
import s from "../Header.module.css";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 8px;
  }

  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background-color: #FFF;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 5;
    li a {
      font-size: 18px;
      line-height: 23px;
      color: #1F1534;
      opacity: 0.5;
      text-decoration: none;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
      <Ul open={open} className={s.navbar}>
          <li><a className={s.menuLink} href="#">Home</a></li>
          <li><a className={s.menuLink} href="#">Find a doctor</a></li>
          <li><a className={s.menuLink} href="#">Apps</a></li>
          <li><a className={s.menuLink} href="#">Testimonials</a></li>
          <li><a className={s.menuLink} href="#">About us</a></li>
      </Ul>
  )
}

export default RightNav
