import React, { useEffect } from "react";
import "./Page.css";
import background from "./background.mp4";
import styled, { keyframes } from "styled-components";
import portrait from "../portrait.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Card from "./Card";
import debttrackerimg from "../debttrackerimg.jpg";
import cartoonimg from "../cartoon.jpg";

const fadeIn = keyframes`
    from {
        opacity:0;
    }
    to{
        opacity:1;
    }`;
const fadeInDelay = keyframes`
    0% { opacity:0; }
    15% { opacity:0; }
    100% { opacity:1; }
`;
const FadeIn = styled.div`
  animation: ${fadeIn} 4s 1;
`;
const FadeInDelay = styled.div`
  animation: ${fadeInDelay} 8s 1;
`;
function Page() {
  useEffect(() => {
    Aos.init({});
  }, []);
  Aos.init({});

  return (
    <>
      <video className="videoTag" playsInline autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      <div id="home" className="home">
        <FadeIn>
          <h1 className="name">
            <span>[</span>Hi. I'm Hansoo<span>]</span>
          </h1>
        </FadeIn>
        <FadeInDelay>
          <p className="job">a full-stack dev and comp-sci student </p>
        </FadeInDelay>
      </div>
      <div id="projects" className="projects">
        <div className="projects-canvas">
          <h1
            className="projects-title"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            Projects
          </h1>
          <div className="projects-container">
            <Card
              link="https://github.com/hyoon98/Debt-Tracker"
              image={debttrackerimg}
            >
              Debt Tracker
            </Card>
            <Card
              link="https://github.com/alhparsa/CSSS-Hackathon"
              image={cartoonimg}
            >
              CSSS Hackathon
            </Card>
          </div>
        </div>
      </div>
      <div id="about" className="about">
        <div className="canvas">
          <h1 className="about-me" data-aos="fade-up" data-aos-duration="1100">
            About Me
          </h1>
          <div className="img-and-text">
            <img className="me" src={portrait} alt=""></img>
            <div className="about-me-p">
              <p className="firstp">
                A local, free-range SFU Computer Science Student from Vancouver,
                BC. Focused on developing full-stack systems, I try and use
                best-practice coding for all my projects with a user-centric
                approach. I mainly use Android Studio and React, but have
                learned a plethora of programming languages, frameworks and
                libraries throughout my studies and am eager to learn more.
              </p>
              <p>
                I can be found either on VSCode or exploring the great outdoors.
              </p>
              <p className="contact">
                <a href="https://github.com/hyoon98">
                  <FontAwesomeIcon className="github" icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/hansoo-yoon-557265195/">
                  <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
