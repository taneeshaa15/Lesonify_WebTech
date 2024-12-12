import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate();

  const defaultValues = {
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    aadharNumber: "",
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    aadharNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await fetch(
      "https://better-flannel-nightgown-bull.cyclic.app/api/registerpatient",
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
    if (response.message === "success") {
      setValues(defaultValues);
      navigate("/signin");
    }
  };

  return (
    <div className="signupDiv">
      <form className="signupForm" onSubmit={handleSubmit}>
        <h3 className="loginHeading">Sign Up</h3>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="age"
            value={values.age}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter age"
            min="0"
            max="150"
            required
          />
        </div>

        <div className="inputDiv">
          <select
            className="genderDropdown"
            id="gender"
            name="gender"
            value={values.gender}
            onChange={handleChange}
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="aadharNumber"
            value={values.aadharNumber}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Aadhaar No."
            maxLength="12"
            pattern="[0-9]{12}"
            title="Aadhaar card number must be 12 digits long and contain only numbers."
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="/signin">sign in?</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
