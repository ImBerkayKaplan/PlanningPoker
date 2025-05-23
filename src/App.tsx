import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toolbar } from './components/Toolbar/Toolbar';
import DeleteOldGames from './pages/DeleteOldGames/DeleteOldGames';
import { GamePage } from './pages/GamePage/GamePage';
import HomePage from './pages/HomePage/HomePage';
import JoinPage from './pages/JoinPage/JoinPage';
import { theme } from './service/theme';

function App() {
  return (
    <div className='LightTheme'>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <Router>
            <Toolbar />
            <Switch>
              <Route path='/apps/voting/game/:id' component={GamePage} />
              <Route exact path='/apps/voting/join/:id' component={JoinPage} />
              <Route exact path='/apps/voting/join' component={JoinPage} />
              <Route path='/apps/voting/delete-old-games' component={DeleteOldGames} />
              <Route exact path='/apps/voting' component={HomePage} />
            </Switch>
          </Router>
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
