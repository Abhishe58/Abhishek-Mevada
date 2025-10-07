import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="Contactcontainer">
        <h1>Let's Connect</h1>
        <p>
          I'm always open to discussing new projects, ideas, or collaborations
          <br />
          Feel free to reach out - I'd love to hear from you!
        </p>
        <div className="contactcontainer">
          <div className="contactBoxa">
            <a href="">abhishekmevada85@gmail.com</a>
            <div className="icoBox">
              <a href="" className="icologo">
                GitHub
                              </a>
              <a href="" className="icologo">
                Linkdin 
              </a>
              <a href="" className="icologo">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
