import React from 'react';
import Menu from '../Menu';
import { Message } from 'semantic-ui-react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../../redux/actions';

const Layout = ({ children }) => {

  const errorMessage = useSelector(state => state.error);
  const dispatch = useDispatch();

  const handleDismiss = () => {
    dispatch(clearError());
  };

  return (
    <div>
      <Menu />
      {errorMessage && (
        <div className='wrapper'>
          <Message
            onDismiss={handleDismiss}
            content={errorMessage}
            color='red'
          />
        </div>
      )}
      <div className='Layout-content'>{children}</div>
    </div>
  );
};

export default Layout;
