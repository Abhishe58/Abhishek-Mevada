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
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a href="" className="icologo">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href="" className="icologo">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
