import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="Navcontainer">
        <h1>AM</h1>
        <div className="Navbox">
          <p className="Navhref">Home</p>
          <p className="Navhref">About</p>
          <p className="Navhref">Projects</p>
          <p className="Navhref">Skills</p>
          <p className="Navhref">Contact</p>
        </div>
        <p className="Resumehref">Resume</p>
      </div>
    </>
  );
}
