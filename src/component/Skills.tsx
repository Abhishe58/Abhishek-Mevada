import "./Skills.css";
import MetaBalls from "./MetaBalls";
import html from "../assets/html5.png";
import css from "../assets/css.png";
import bootstrap from "../assets/js.jpg";
import js from "../assets/bootstrap.webp";
import react from "../assets/reacta.webp";
import flask from "../assets/flask.png";
import express from "../assets/express.png";
import nodejs from "../assets/nodejs.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";
import sqlite from "../assets/sqlite.png";
import pandas from "../assets/pandaas.png";
import matplotlib from "../assets/matplotlib.png";
import seaborn from "../assets/seaborn.png";

export default function Skills() {
  return (
    <>
      <div className="Skillcontainer">
        <h1>Skills & Technologies</h1>
        <p>
          Here are the tools and technologies I use to build, analyze, and
          innovate.
        </p>
        <div className="skillworld">
          <div className="skilllanContainer">
            {/* frontend */}
            <div className="skillcona">
              <h2>Fronted Langues</h2>
              <div className="lanContainer">
                <div className="lanBox" id="pra">
                  <img src={html} alt="HTML5" className="html" />
                </div>
                <div className="lanBox" id="css">
                  <img src={css} alt="CSS" className="css" />
                </div>
                <div className="lanBox" id="js">
                  <img src={bootstrap} alt="Bootstrap" className="bootstrap" />
                </div>
                <div className="lanBox" id="bootstrap">
                  <img src={js} alt="Js" className="bootstrap" />
                </div>
                <div className="lanBox" id="react">
                  <img src={react} alt="React" className="bootstrap" />
                </div>
              </div>
            </div>
            {/* backend */}
            <div className="skillcona">
              <h2>Backend Langues</h2>
              <div className="lanContainer">
                <div className="lanBox" id="flask">
                  <img src={flask} alt="Flask" className="bootstrap" />
                </div>
                <div className="lanBox" id="express">
                  <img src={express} alt="Exrpress" className="bootstrap" />
                </div>
                <div className="lanBox" id="node">
                  <img src={nodejs} alt="Node js" className="bootstrap" />
                </div>
              </div>
            </div>
            {/* Database */}
            <div className="skillcona">
              <h2>Database</h2>
              <div className="lanContainer">
                <div className="lanBox" id="mysql">
                  <img src={mysql} alt="MySql" className="bootstrap" />
                </div>
                <div className="lanBox" id="mongodb">
                  <img src={mongodb} alt="MongoDb" className="bootstrap" />
                </div>
                <div className="lanBox" id="sqlite">
                  <img src={sqlite} alt="Sqlite" className="bootstrap" />
                </div>
              </div>
            </div>
            {/* Ml */}
            <div className="skillcona">
              <h2>Data Science and Analysis</h2>
              <div className="lanContainer">
                <div className="lanBox" id="pandas">
                  <img src={pandas} alt="Pandas" className="bootstrap" />
                </div>
                <div className="lanBox" id="matplolib">
                  <img
                    src={matplotlib}
                    alt="Matplotlib"
                    className="bootstrap"
                  />
                </div>
                <div className="lanBox" id="seaborn">
                  <img src={seaborn} alt="Seaborn" className="bootstrap" />
                </div>
                <div className="lanBox" id="supervised">
                  Supervised Learning
                </div>
                <div className="lanBox" id="unsupervisedlearning">
                  Unsupervised Learning
                </div>
              </div>
            </div>
          </div>
          <div className="aniContainer">
            <MetaBalls
              color="#2563eb"
              cursorBallColor="#ffffff"
              cursorBallSize={4}
              ballCount={25}
              animationSize={30}
              enableMouseInteraction={true}
              enableTransparency={true}
              hoverSmoothness={0.05}
              clumpFactor={1.5}
              speed={0.2}
            />
          </div>
        </div>
      </div>
    </>
  );
}
