import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Login = () => {
  let navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const result = await fetch(
      "https://better-flannel-nightgown-bull.cyclic.app/api/loginpatient",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    const response = await result.json();

    if (response.user) {
      setLoading(false)
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/");
    }
  };

  return (
    <div className="signinDiv">
      <form className="signinForm " onSubmit={handleSubmit}>
        <h3 className="loginHeading">Log In</h3>
        <div className="margin-top form-group">
          <input
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          {loading ? <ClipLoader color="white" className="mx-auto" size={20} /> : "Login"}
        </button>
        <p className="forgot-password text-right">
          <Link to="/signin">Forget Password?</Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
