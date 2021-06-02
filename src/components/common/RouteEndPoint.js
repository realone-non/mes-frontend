import { Route, Redirect } from 'react-router-dom';

const RouteEndPoint = (props) => {
  const { path, exact, endPoint, redirect, propObject } = props;
  const Component = props.component;
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

export default RouteEndPoint;