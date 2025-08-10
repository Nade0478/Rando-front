import React from "react";
import Menu from "../../components/menu/Menu";
import DarkModeForm from "../../components/darkmode/DarkModeForm";
import Footer from "../../components/footer/Footer";
import BlogForm from "../../components/blog/BlogForm";



const Blog = () => {
  const exampleArticle = {
    title: "Article exemple",
    // Ajoutez d'autres propriétés si nécessaire
  };

  return (
    <div className="page-wrapper">
      <Menu />
      {/* Ajout du composant Menu */}
      <DarkModeForm />
      <div className="root">
        <div className="container-fluid">
          <h1>Bienvenue sur mon blog</h1>
          <p>Cette page contient des articles de blog.</p>
          <BlogForm article={exampleArticle} />{" "}
          {/* Transmission de données test */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
