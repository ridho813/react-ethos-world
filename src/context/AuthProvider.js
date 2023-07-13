import { createContext } from 'react';
import Login from '../login/login';
import App from '../App';
import  Cookies  from  'js-cookie' ;

const AuthContex = createContext({});

export function AuthProvider (props) {
  // if (Cookies.get("token")) {
    if (sessionStorage.getItem("auth")) {
        return(
<>
    <App {...props} />;
</>
        ) 
      } else {
        return (
        <>
        <Login/> 
        </> 
        )
      }

}

export default AuthContex
