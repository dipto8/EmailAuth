import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../Firebase/Firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const condition = e.target.terms.checked;
    console.log(email, password, condition);

    // clear error & success message
    setRegisterError("");
    setSuccess(" ");

    if (password.length < 6) {
      setRegisterError(" Password should be at least 6 characters ");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your Password Should have at least one UpperCase character"
      );
      return;
    }
    else if(!condition){
      setRegisterError('Please accept Terms and Conditions')
      return;
    }

    //create User
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const userRegister = result.user;
        setSuccess("Account is Created | Welcome!!");
      })

      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleRegister} className="card-body">
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
         <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
            />
            <span
              className="absolute top-5 right-5"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            </div>

      
          </div>
          <div className="">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms"> Accept <a href="">Terms and conditions</a> </label>
          </div>
       
      
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      {registerError && <p className="text-red-600"> {registerError}</p>}
      {success && <p className="text-green-600"> {success}</p>}
      <p className=""> Already have an Account? <Link to='/login'>Login</Link></p>
      
    </div>
  );
};

export default Register;
