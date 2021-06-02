import { Route, Switch } from 'react-router-dom';
import Main from 'pages/Main';
import Sub from 'pages/Sub';
import Notfound from 'pages/NotFound';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/sub' component={Sub} />
        <Route component={Notfound} />
      </Switch>
    </div>
  );
};

export default App;
