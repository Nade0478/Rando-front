import React from "react";
import "../../style/style-contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeForm from "../../components/darkmode/DarkModeForm";
import ContactForm from "../../components/contact/ContactForm";
import Menu from "../../components/menu/Menu";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <div className="page-wrapper">
      <Menu />
      <DarkModeForm />
      <div className="root">
        <div className="container-fluid">
          <h1>BIENVENU SUR LA PAGE CONTACT</h1>
          <p>
            Pour toute question ou suggestion, n'hésitez pas à me contacter en
            remplissant le formulaire de contact.
          </p>
          <ContactForm />
        </div>
        <p>
          Sinon vous pouvez écrire à mon adresse email :
          contact.rando.ouest@gmail.com
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
