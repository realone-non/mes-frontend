import { Route, Redirect } from 'react-router-dom';

const AuthRoute = ({ path, component: Component,exact, endPoint, redirect, propObject }) => {
  return (
    <Route path={path} exact={exact} >
      {endPoint 
      ?
      <Component 
        props={propObject}
      />
      :
      <Redirect to={redirect} />
      }
    </Route>
  )
};

export default AuthRoute;