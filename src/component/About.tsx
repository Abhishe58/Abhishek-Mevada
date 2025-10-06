import "./About.css";
import profile from "../assets/profile.png";

export default function About() {
  return (
    <>
      <div className="Aboutcontainer">
        <div className="Aboutcontainera">
          <div className="aboutContentBox">
            <h1>About Me</h1>
            <p>
              I'm Abhishek Mevada, a passionate Web Developer and{" "}
              <strong>Data Science and Analysis</strong> enthusiast with strong
              interest in <strong>Machine Learning</strong>. I enjoy building{" "}
              <strong>modern, user-friendly application</strong> while
              leveraging data-driven insights to solve real-world problems.
            </p>
            <p className="Resumehref">Resume</p>
          </div>
        </div>
        <div className="Aboutcontainerb">
          <div className="ProfileCoc">
            <img src={profile} alt="" className="profileImg" />
          </div>
        </div>
      </div>
    </>
  );
}
