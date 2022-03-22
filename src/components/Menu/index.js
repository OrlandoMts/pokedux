import React from 'react';
import { Menu as SemanticMenu, Container, Image } from 'semantic-ui-react';
import logo from '../../statics/images/logo_v4.svg';

const Menu = () => {
  return (
    <SemanticMenu fixed='top'>
      <Container>
        <SemanticMenu.Item href='/'>
          <Image size='small' src={logo} />
        </SemanticMenu.Item>
        <SemanticMenu.Item href='/'>Home</SemanticMenu.Item>
        <SemanticMenu.Item to='/' position='right'>
          Favorites
        </SemanticMenu.Item>
      </Container>
    </SemanticMenu>
  );
};

export default Menu;
