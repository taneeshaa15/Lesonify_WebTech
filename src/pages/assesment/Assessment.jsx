import React from "react";
import { NavLink } from "react-router-dom";
import "./assesment.css";

const Assessment = () => {
  return (
    <div className="assesmentDiv">
      <h1 className="assHeading">Assessment</h1>
      <div
        type="circle"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-md-6">
          <div className="categoryDiv">
            <NavLink
              title="Test for the students having Specific Language Impairment "
              to="/wordGame"
            >
              <h3>Decision-Making</h3>
            </NavLink>
          </div>
          <div className="categoryDiv">
            <NavLink title="Test for the students having dyslexia" to="/memory">
              <h3>Memory</h3>
            </NavLink>
          </div>
        </div>
        <div className="col-md-6">
          <div className="categoryDiv">
            <NavLink
              title="Test for the students having  dyscalculia"
              to="/problemSolving"
            >
              <h3>Problem-Solving</h3>
            </NavLink>
          </div>
          <div className="categoryDiv">
            <NavLink to="/attention">
              <h3>Attention</h3>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
