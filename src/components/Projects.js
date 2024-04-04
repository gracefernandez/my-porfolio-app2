import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ProjectDescription from "./ProjectDescription";

export const Projects = () => {

  const project1 = 
    {
      imgUrl: projImg1,
      title: "Business Startup",
      role: "Design & Development",
      company: "Company Name",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

    }
    const project2 =
   {
      title: "Business Test",
      description: "Design & Development",
      // imgUrl: projImg2,
    }

    const project3 =
     {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    }

  const title = "Business Startup";
  const role = "Design & Development";
  const description = "This is a project description lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula sit amet, posuere turpis. Nulla facilisi";

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <h5 style={{textAlign:"center", margin:"15px"}}>Here are some of outstanding projects and latest experience </h5>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                              <div>                                
                                <ProjectDescription {...project1}/>
                              </div>
                       
                        }
                      </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                              <div>                                
                                <ProjectDescription {...project2}/>
                              </div>
                      </Row>                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                             <div>                                
                                <ProjectDescription {...project3}/>
                             </div>
                  
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}