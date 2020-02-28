import React , {Component} from 'react';
import { Route, Redirect } from "react-router-dom";
// 1. make sure the interface (api) is equivalent to Route
// 2. render <Route /> and pass the props through
// 3. check if user is authenticated if so, it renders the Component. if not redirects to login
function PrivateRoute(props){
const { 
  component: Component,
  ...rest
} = props

return(

  <>

      <Route {...rest} render={ (renderProps) => {
          if(localStorage.getItem("token")){
              return <Component {...renderProps} />
          }else{
              return <Redirect to="/" />
          }
      }} />

  </>

)
}

export default PrivateRoute;
