import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const redirectToPage1 = () => {
    navigate("/result", { state: { title: "problemSolving" } });
  };

  const redirectToPage2 = () => {
    navigate("/result", { state: { title: "memory" } });
  };

  const redirectToPage3 = () => {
    navigate("/result", { state: { title: "decisionMaking" } });
  };

  const redirectToPage4 = () => {
    navigate("/result", { state: { title: "attention" } });
  };

  return (
    <div
      style={{ marginTop: "100px" }}
      class="dashboardContainer container mt-5"
    >
      <div
        style={{ marginTop: "100px" }}
        class="row d-flex justify-content-center"
      >
        <div class="col-md-7">
          <div class="card p-3 py-4">
            <div class="text-center">
              <img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                width="100"
                class="rounded-circle"
              />
            </div>
            <div class="text-center mt-3">
              <span class="bg-secondary p-1 px-4 rounded text-white">
                {user.email}
              </span>
              <h5 class="mt-2 mb-0">{user.name}</h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Container className="text-center">
        <Row>
          <Col>
            <Button variant="primary w-50 m-2" onClick={redirectToPage1}>
              Problem Solving
            </Button>
          </Col>
          <Col>
            <Button variant="primary w-50 m-2" onClick={redirectToPage2}>
              Memory
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary w-50 m-2" onClick={redirectToPage3}>
              Decision Making
            </Button>
          </Col>
          <Col>
            <Button variant="primary w-50 m-2" onClick={redirectToPage4}>
              Attention
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
