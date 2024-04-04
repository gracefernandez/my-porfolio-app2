import { Col } from "react-bootstrap";
import React from "react";

export const ProjectCard = ({ title, role, imgUrl }) => {
  return (
    <div className="proj-imgbx0">
    <Col size={12} sm={6} md={4} >
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{role}</span>
        </div>
      </div>
    </Col>
    </div>
  )
}