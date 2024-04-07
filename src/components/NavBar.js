import React, { useEffect , useState } from "react";
import { Navbar, Container, Nav,  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/img/GfLogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const  NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const linkedinUrl = "https://www.linkedin.com/in/your-linkedin";
  const githubUrl = " ";
  const twitterUrl = "https://twitter.com/your-twitter";
  const emailUrl = "mailto:your-email";
  const instagramUrl = "https://www.instagram.com/your-instagram";

  const socialLinks ={
    linkedin: linkedinUrl,
    github: githubUrl,
    twitter: twitterUrl,
    email: emailUrl,
    instagram: instagramUrl

  } ;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        

        setScrolled(false);
        
      }
    };
  
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }



  return(

    <Navbar expand="lg" className= {scrolled ? "scrolled" : ""} >
    <Container id="navbar-top">
      <Navbar.Brand href="/"><img src={logo} width={200} height={200}  alt= "Logo" /> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" id="navbar-auto">
          <Nav.Link href="#home" style={{color:"blue"}} className={activeLink === 'home'? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills"  className={activeLink === 'skills'? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects"  className={activeLink === 'projects'? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          <Nav.Link href="#about"  className={activeLink === 'about'? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('about')}>About me</Nav.Link>

        </Nav>
        <span className="navbar-text">
            <div className="social-icon">
                <a href= {linkedinUrl} target="_blank"><img src={navIcon1} alt="" /> </a>
                <a href= {emailUrl}><img src={navIcon4} alt="" /> </a>
                <a href= {instagramUrl}><img src={navIcon3} alt="" /> </a>
            </div>
            {/* <button className="vvd" onClick = {() => console.log('connect')}> <span> Let's Connect </span> </button>   */}
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

};