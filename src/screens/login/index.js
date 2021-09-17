import React,{useState,useRef} from 'react';
import axios from 'axios';
import styles from './Login.module.sass';
import TextInput from '../../components/TextInput';

const Login = () => {
const [email,setEmail] = useState();
const [password,setPassword] = useState();
const [emailError,setEmailError] = useState(false);
const [loginError,setLoginError] = useState(false);

const handleClick =() => {
  if((new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email))===false) {
    setEmailError(true)
  } else {
    setEmailError(false)
  }
}


const handleLogin = () => {
  handleClick()

  /*
  if(email.current.value==="Raheel.ahmed@live.com" && password.current.value==="password"){
    console.log("success")
    setLoginError(false)
  }
  else {
    setLoginError(true)
  }
*/
  axios.post('http://localhost:4000/login',{
    "email":email,
    "password":password
  }).then((Response) => {
    setLoginError(false);
    console.log(Response);

  }).catch((err) => {
    setLoginError(true);
    console.log(err);
  })

}



  return (<div className="marginleft" >


   {emailError ? <div className="alert alert-primary w-50" role="alert"><p>
<strong>Email is not Valid</strong> enter valid Email. </p></div>:<div></div>}

{loginError ? <div className="alert alert-primary w-50"><p>
<strong>Invaled Email or Password</strong> </p></div>:<div></div>}

    <form> 
        <div className="form-row" >
          <div className="col-md-4 mb-3">
                   <TextInput
                      className={styles.field}
                      label="EMAIL"
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='email@example.com'
                      required
                    />
          </div>
          
          <div className="col-md-4 mb-3">
                    <TextInput
                      className={styles.field}
                      label="PASSWORD"
                      name="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Password'
                      required
                    />

          </div>
          <br/>
          <button type="button" className="btn btn-primary rounded-pill" onClick={() => handleLogin()}>LOGIN</button>
        </div>
      </form>
      </div>
  
)
}

export default Login;