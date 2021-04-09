import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import AppToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GamesIcon from '@material-ui/icons/Games';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Toolbar.css';
export const title = 'Planing Poker';

export const Toolbar = () => {
  const history = useHistory();
  return (
    <AppBar
      position='relative'
      style={{
        color: 'black',
        background: 'transparent',
        boxShadow: 'none',
        flexGrow: 1,
      }}
    >
      <AppToolbar>
        <div className='HeaderContainer'>
          <div
            className='HeaderLeftContainer'
            onClick={() => (window.location.href = '/')}
          >
            <GamesIcon className='HeaderIcon' />
            <Typography variant='h6' color='inherit' noWrap>
              {title}
            </Typography>
          </div>
          <div>
            <Button color='inherit' onClick={() => history.push('/')}>
              New Session
            </Button>
            <Button color='inherit' onClick={() => history.push('/join')}>
              Join Session
            </Button>
            <Button color='inherit'>About</Button>
          </div>
        </div>
      </AppToolbar>
    </AppBar>
  );
};