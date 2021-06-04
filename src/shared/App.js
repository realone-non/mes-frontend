import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

// component
import AuthRoute from 'components/common/AuthRoute'

// router
import Main from 'pages/Main';
import Sub from 'pages/Sub';
import LogIn from 'pages/LogIn';
import Grid from 'pages/Grid';
import AgGrid from 'pages/AgGrid';
import Notfound from 'pages/NotFound';

const App = () => {
  const { loggedIn, loggedOut } = useSelector((state => state.user));
  return (
    <div className='App'>
      <Switch>
        <AuthRoute 
          path='/'
          component={Main}
          exact={true}
          endPoint={loggedIn}
          redirect='/login'
        />
        <AuthRoute 
          path='/sub'
          component={Sub}
          exact={false}
          endPoint={loggedIn}
          redirect='/login'
        />
        <AuthRoute 
          path='/login'
          component={LogIn}
          exact={false}
          endPoint={loggedOut}
          redirect='/'
        />
        <Route 
          path='/grid'
          component={Grid}
        />
        <Route 
          path='/aggrid'
          component={AgGrid}
        />
        <Route component={Notfound} />
      </Switch>
    </div>
  );
};

export default App;
