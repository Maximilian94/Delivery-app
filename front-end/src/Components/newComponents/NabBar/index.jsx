import React from 'react';
import PropTypes from 'prop-types';
import { NavBarElement } from '../../styles';
import Logo from './Logo';
import Navigators from './Navigators';
import UserName from './UserName';
import LogOut from './LogOut';
import './style.css';

function NavBar() {
  return (
    <NavBarElement className="navbar">
      <Logo />
      <Navigators />
      <UserName />
      <LogOut />
      <p>Teste</p>
    </NavBarElement>
  );
}

NavBar.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default NavBar;
