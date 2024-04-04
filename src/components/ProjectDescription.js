import React from 'react';
import logo from "../assets/img/logo.svg";
import { ProjectCard } from './ProjectCard';



const ProjectDescription = ({imgUrl, title, company, role, description}) => {
    return (
        <div className="project-description-section">
            <ProjectCard  title= {title} role={role} imgUrl={imgUrl}  />
            <h1>{title}</h1>
            <h5>Company: {company}</h5>
            <h5>Role: {role}</h5>
            <p>{description}</p>
        </div>
    );
};

export default ProjectDescription;