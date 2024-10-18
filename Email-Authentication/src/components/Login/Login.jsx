import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import auth from "../../Firebase/Firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSucces] = useState("");
  const emailRef = useRef(null)

  //Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Login info ", email, password);
    // clear error & success message
    setLoginError("");
    setLoginSucces("");

    //sign in with Email and Password

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if(result.user.emailVerified){
          setLoginSucces(" User Logged in");
        }else{
          setLoginError('Please verify your email')
        }
          //send verification Email
    
      })
      .catch((error) => {
        setLoginError(error.message);
      
      });
  };
  
// Handle Reset Password
   const handleResetPassword = ()=>{
    const email = emailRef.current.value;
    if(!email){
      console.log('Enter your Email')
      return
    }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      console.log('Invalid Email')
      return

    }
    //send Reset email for the Password

    sendPasswordResetEmail(auth,email)
    .then(result=>{
      alert('Please check your Email',email)
    })
    .catch(error=>{
      alert('Something went Wrong')
    })


    
   }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}

                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="mt-2" htmlFor="forgot_password">
                  <a className="underline" onClick={handleResetPassword}>Forgot Password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {loginSuccess && <p className="text-green-400"> {loginSuccess}</p>}
            {loginError && <p className="text-red-500">{loginError}</p>}
            <p>
              New to this website? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
