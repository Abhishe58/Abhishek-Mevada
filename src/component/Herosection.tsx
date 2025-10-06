import "./Herosection.css";
import { useEffect, useState } from "react";
import TextType from "./TextType";
import DarkVeil from "./DarkVell";

export default function Herosection() {
  const commands = [
    "npm install",
    "npm run dev",
    "git clone https://github.com/abhishe58/portfolio",
    "python -m venv venv && source venv/bin/activate",
    "python app.py",
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typed, setTyped] = useState("");

  // Typing effect for terminal mockup
  useEffect(() => {
    if (lineIndex >= commands.length) return;
    if (charIndex <= commands[lineIndex].length) {
      const t = setTimeout(() => {
        setTyped(commands[lineIndex].slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 45);
      return () => clearTimeout(t);
    }
    // pause then move to next line
    const pause = setTimeout(() => {
      setCharIndex(0);
      setLineIndex((l) => l + 1);
      setTyped("");
    }, 700);
    return () => clearTimeout(pause);
  }, [charIndex, lineIndex]);

  return (
    <div className="Herosectioncontainer">
      <div className="aniCon">
        <DarkVeil hueShift={180} />
      </div>
      <div className="HeroCon">
        <div className="containera">
          <h1>
            Hi, I'm
            <TextType
              text={[
                "Abhishek Mevada",
                "Web Developer",
                "Data Science and Analysis",
                "Machine Learning",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>
          <p>
            I am a <strong>Web Developer</strong> and{" "}
            <strong>Data Science and Analysis</strong> Enthusiast passionate
            about building modern <strong>web apps </strong>and extracting
            insights through <strong>Machine Learning</strong> &{" "}
            <strong>Data Analysis</strong>.
          </p>
          <div className="hsBox">
            <button className="Primarybut">View Projects</button>
            <button className="Secondarybut">Contact Me</button>
          </div>
        </div>
        <div className="containerb">
          <div className="codesniptecontainer">
            <div className="snipteheader">
              <div className="sheaderboxa">
                <div className="shdota"></div>
                <div className="shdotb"></div>
                <div className="shdotc"></div>
              </div>
              <p>terminal</p>
            </div>
            <div className="sniptebody">
              {/* printed lines (past commands) */}
              {[...Array(lineIndex)].map((_, i) => (
                <div key={i} className="condesniptbo">
                  <span className="doller">$</span>
                  <span className="codesniptp">{commands[i]}</span>
                </div>
              ))}

              {/* typing line */}
              {lineIndex < commands.length && (
                <div className="condesniptbo">
                  <span className="doller">$</span>
                  <span className="codesniptp">
                    {typed}
                    <span className="animate-blink">▮</span>
                  </span>
                </div>
              )}

              {/* finished indicator */}
              {lineIndex >= commands.length && (
                <div className="codesniptpb">All set — portfolio running</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
