import { Divider, Grid, Slide } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import { CreateGame } from '../../components/Poker/CreateGame/CreateGame';
import { JoinGame } from '../../components/Poker/JoinGame/JoinGame';
import { RecentGames } from '../../components/Poker/RecentGames/RecentGames';
import './HomePage.css';
import { GoogleAd } from '../../components/GoogleAd/GoogleAd';

export const HomePage = () => {
  const isJoin = useRouteMatch('/apps/voting/join');

  return (
    <>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid container item sm={12} lg={11} justify='center' alignItems='center'>
          <Grid item sm={12} lg={6}>
            <div className='HomePageContainer'>{isJoin ? <JoinGame /> : <CreateGame />}</div>
          </Grid>
        </Grid>
        <GoogleAd />
        <Grid container item sm={12} lg={9} justify='center' alignItems='center'>
          <Grid item sm={12} lg={6}>
            <Slide in={true} direction='up' timeout={1000}>
              <Divider variant='middle'></Divider>
            </Slide>
          </Grid>
        </Grid>
        <Grid container item sm={12} lg={9} justify='center' alignItems='center'>
          <Grid item sm={12} lg={6}>
            <Slide in={true} direction='up' timeout={1500}>
              <div className='HomePageContainer'>
                <RecentGames />
              </div>
            </Slide>
          </Grid>
        </Grid>
        <Grid container item sm={12} lg={9} justify='center' alignItems='center'>
          <Grid item sm={12} lg={6}>
            <Slide in={true} direction='up' timeout={2000}>
              <Divider variant='middle'></Divider>
            </Slide>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
