import profilePic from "../assets/img/grace-bw.png";
import colorSharp from "../assets/img/color-sharp.png";

export const AboutMe = (profileText, Name, Lastname , email, ) => {
    profileText = "I am a Full Stack Developer with a passion for creating and developing web applications.\
     I have experience in building web applications using JavaScript, React, Node.js, Express, and MongoDB. \
     I am a quick learner and a team player who is always eager to learn new technologies and work on challenging projects.\
     I am currently looking for opportunities to work on exciting projects and grow as a developer.";
    Name = "Grace";
    Lastname = "Fernandez";
    email = "grace@test.com";

    return (
        <section className="aboutme" id="about">
        <div>
        <h1>About Me</h1>
        <img style={{height:"200px", width:"200px"}} src={profilePic} alt="Header" />

        <h2> {Name} {Lastname} </h2>

        <p> {profileText}  </p>
        
        </div>
        <img className="background-image-about" src={colorSharp} alt="Image" />
        </section>
    );
}
