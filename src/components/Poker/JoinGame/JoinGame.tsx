import { Button, Card, CardActions, CardContent, CardHeader, Grow, TextField, Snackbar, Grid } from '@material-ui/core';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getGame } from '../../../service/games';
import { addPlayerToGame, isCurrentPlayerInGame } from '../../../service/players';
import Alert from '@material-ui/lab/Alert';
import './JoinGame.css';

export const JoinGame = () => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const joinId = queryParams.get('join');

  const [joinGameId, setJoinGameId] = useState(joinId || '');
  const [playerName, setPlayerName] = useState('');
  const [gameFound, setIsGameFound] = useState(true);
  const [showNotExistMessage, setShowNotExistMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (joinId) {
        if (await getGame(joinId)) {
          setIsGameFound(true);
          setJoinGameId(joinId);
          // Don't automatically redirect if player hasn't joined yet
          if (await isCurrentPlayerInGame(joinId)) {
            history.push(`/apps/voting/game/${joinId}`);
          }
        } else {
          setShowNotExistMessage(true);
          setTimeout(() => {
            history.push('/apps/voting');
          }, 5000);
        }
      }
    }
    fetchData();
  }, [joinId, history]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    if (joinGameId) {
      const res = await addPlayerToGame(joinGameId, playerName);

      setIsGameFound(res);
      if (res) {
        history.push(`/apps/voting/game/${joinGameId}`);
      }
      setLoading(false);
    }
  };

  return (
    <Grow in={true} timeout={500}>
      <div>
        <form onSubmit={handleSubmit}>
          <Card variant='outlined' className='JoinGameCard'>
            <CardHeader
              className='JoinGameCardHeader'
              title='Join a Session'
              titleTypographyProps={{ variant: 'h4' }}
            />
            <CardContent className='JoinGameCardContent'>
              <TextField
                error={!gameFound}
                helperText={!gameFound && 'Session not found, check the ID'}
                className='JoinGameTextField'
                required
                id='filled-required'
                label='Session ID'
                placeholder='xyz...'
                defaultValue={joinGameId}
                variant='outlined'
                onChange={(event: ChangeEvent<HTMLInputElement>) => setJoinGameId(event.target.value)}
              />
              <TextField
                className='JoinGameTextField'
                required
                id='filled-required'
                label='Your Name'
                placeholder='Enter your name'
                defaultValue={playerName}
                variant='outlined'
                onChange={(event: ChangeEvent<HTMLInputElement>) => setPlayerName(event.target.value)}
              />
            </CardContent>
            <CardActions className='JoinGameCardAction'>
              <Button type='submit' variant='contained' color='primary' className='JoinGameButton' disabled={loading}>
                Join
              </Button>
            </CardActions>
          </Card>
        </form>
        <Snackbar
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          open={showNotExistMessage}
          autoHideDuration={5000}
          onClose={() => setShowNotExistMessage(false)}
        >
          <Alert severity='error'>Session was deleted and doesn't exist anymore!</Alert>
        </Snackbar>
      </div>
    </Grow>
  );
};