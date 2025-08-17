import React from "react";
import Menu from "../components/menu/Menu";
import DarkModeForm from "../components/darkmode/DarkModeForm";
import AboutForm from "../components/about/AboutForm";
import AboutForm4 from "../components/about/AboutForm4";
import AboutForm1 from "../components/about/AboutForm1";
import AboutForm2 from "../components/about/AboutForm2";
import AboutForm3 from "../components/about/AboutForm3";
import Footer from "../components/footer/Footer";

const About = () => {
  return (
    <div className="page-wrapper">
      <Menu />
      {/* Importation du formulaire DarkModeForm */}
      <DarkModeForm />
      <div className="root">
        <div className="container-fluid">
          <h1>A PROPOS DE RANDO-OUEST</h1>
          <AboutForm />
          <hr /> {/* Ligne horizontale */}
          <h2>Notre histoire</h2>
          <AboutForm4 />
          <hr /> {/* Ligne horizontale */}
          <h2>Qui sommes-nous ?</h2>
          <AboutForm1 />
          <hr /> {/* Ligne horizontale */}
          <h2>Pourquoi nous ?</h2>
          <AboutForm2 />
          <hr /> {/* Ligne horizontale */}
          <h2>Nouveautés</h2>
          <AboutForm3 />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
