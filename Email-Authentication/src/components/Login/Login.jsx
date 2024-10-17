import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../Firebase/Firebase.config";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSucces] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Login info ", email, password);
      // clear error & success message
      setLoginError('')
      setLoginSucces('')

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setLoginSucces(" User Logged in");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

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
                  <a href="">Forgot Password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {loginSuccess && <p className="text-green-400"> {loginSuccess}</p>}
            {loginError && <p className="text-red-500">{loginError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
