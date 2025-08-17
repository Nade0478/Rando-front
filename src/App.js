import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from "./pages/Blog";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Terms from "./pages/autre/Terms";
import Privacy from "./pages/autre/Privacy";
import FaqPage from "./pages/autre/FaqPage";

import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

import Article from "./pages/article/Article";
import AddArticle from "./pages/article/AddArticle";
import EditArticle from "./pages/article/EditArticle";
import ShowArticle from "./pages/article/ShowArticle";

import Opinion from "./pages/opinion/Opinion";
import AddOpinion from "./pages/opinion/AddOpinion";
import EditOpinion from "./pages/opinion/EditOpinion";
import ShowOpinion from "./pages/opinion/ShowOpinion";

import Category from "./pages/category/Category";
import AddCategory from "./pages/category/AddCategory";
import EditCategory from "./pages/category/EditCategory";

import Place from "./pages/place/Place";
import AddPlace from "./pages/place/AddPlace";
import EditPlace from "./pages/place/EditPlace";
import ShowPlace from "./pages/place/ShowPlace";
import Page from "./pages/place/Page";

import Profil from "./pages/Profil";
import Role from "./pages/Role";
import Dashboard from "./pages/Dashboard";

import User from "./pages/User";
import AddUser from "./pages/user/AddUser";
import EditUser from "./pages/user/EditUser";
import ShowUser from "./pages/user/ShowUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Pages générales */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* Authentification */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Articles */}
        <Route path="/article" element={<Article />} />
        <Route path="/article/add" element={<AddArticle />} />
        <Route path="/article/edit/:article" element={<EditArticle />} />
        <Route path="/article/show/:id" element={<ShowArticle />} />

        {/* Opinions */}
        <Route path="/opinion" element={<Opinion />} />
        <Route path="/opinion/add" element={<AddOpinion />} />
        <Route path="/opinion/edit/:opinion" element={<EditOpinion />} />
        <Route path="/opinion/show/:id" element={<ShowOpinion />} />

        {/* Catégories */}
        <Route path="/category" element={<Category />} />
        <Route path="/category/add" element={<AddCategory />} />
        <Route path="/category/edit/:category" element={<EditCategory />} />

        {/* Lieux */}
        <Route path="/place" element={<Place />} />
        <Route path="/place/add" element={<AddPlace />} />
        <Route path="/place/edit/:place" element={<EditPlace />} />
        <Route path="/place/show/:id" element={<ShowPlace />} />
        <Route path="/place/page" element={<Page />} />

        {/* Utilisateurs */}
        <Route path="/user" element={<User />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="/user/show/:id" element={<ShowUser />} />

        {/* Autres */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/role" element={<Role />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
