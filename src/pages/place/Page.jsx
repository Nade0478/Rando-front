import React from "react";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";
import DarkModeForm from "../../components/darkmode/DarkModeForm";

// Import du fichier de styles global
import "../../style/style.css";
import PlaceForm from "../../components/place/PlaceForm";
import PlaceList from "../../components/place/PlaceList";
import PlaceOpinion from "../../components/place/PlaceOpinion";

const Page = () => {
  return (
    <div className="page-wrapper">
      <Menu />
      <DarkModeForm />
      <div className="root">
        <div className="container-fluid">
          <PlaceForm />
          <PlaceList />
          <PlaceOpinion />
        </div>{" "}
        {/* Correction : fermeture correcte de la div */}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
