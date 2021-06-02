import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

// component
import RouteEndPoint from 'components/common/RouteEndPoint'

// router
import Main from 'pages/Main';
import Sub from 'pages/Sub';
import LogIn from 'pages/LogIn';
import Notfound from 'pages/NotFound';

const App = () => {
  const { loggedIn, loggedOut } = useSelector((state => state.user));
  return (
    <div className='App'>
      <Switch>
        <RouteEndPoint 
          path='/'
          component={Main}
          exact={true}
          endPoint={loggedIn}
          redirect='/login'
        />
        <RouteEndPoint 
          path='/sub'
          component={Sub}
          exact={false}
          endPoint={loggedIn}
          redirect='/login'
        />
        <RouteEndPoint 
          path='/login'
          component={LogIn}
          exact={false}
          endPoint={loggedOut}
          redirect='/'
        />
        <Route component={Notfound} />
      </Switch>
    </div>
  );
};

export default App;
