import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages principales
import Home from "./pages/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Dashboard from "./pages/Dashboard";
import Profil from "./pages/Profil";

// Auth
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

// Article
import Article from "./pages/article/Article";
import AddArticle from "./pages/article/AddArticle";
import EditArticle from "./pages/article/EditArticle";
import ShowArticle from "./pages/article/ShowArticle";

// Opinion
import Opinion from "./pages/opinion/Opinion";
import AddOpinion from "./pages/opinion/AddOpinion";
import EditOpinion from "./pages/opinion/EditOpinion";
import ShowOpinion from "./pages/opinion/ShowOpinion";

// Category
import Category from "./pages/category/Category";
import AddCategory from "./pages/category/AddCategory";
import EditCategory from "./pages/category/EditCategory";

// Place
import Place from "./pages/place/Place";
import AddPlace from "./pages/place/AddPlace";
import EditPlace from "./pages/place/EditPlace";
import ShowPlace from "./pages/place/ShowPlace";
import Page from "./pages/place/Page";

// User
import User from "./pages/User";
import AddUser from "./pages/user/AddUser";
import EditUser from "./pages/user/EditUser";
import ShowUser from "./pages/user/ShowUser";

// Role
import Role from "./pages/Role";

// Autres
import Terms from "./pages/autre/Terms";
import Privacy from "./pages/autre/Privacy";
import FaqPage from "./pages/autre/FaqPage"; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Accueil & général */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profil" element={<Profil />} />

        {/* Auth */}
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />

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

        {/* Categories */}
        <Route path="/category" element={<Category />} />
        <Route path="/category/add" element={<AddCategory />} />
        <Route path="/category/edit/:category" element={<EditCategory />} />

        {/* Places */}
        <Route path="/place" element={<Place />} />
        <Route path="/place/add" element={<AddPlace />} />
        <Route path="/place/edit/:place" element={<EditPlace />} />
        <Route path="/place/show/:id" element={<ShowPlace />} />
        <Route path="/place/page" element={<Page />} />

        {/* Users */}
        <Route path="/user" element={<User />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="/user/show/:id" element={<ShowUser />} />

        {/* Roles */}
        <Route path="/role" element={<Role />} />

        {/* Autres */}
        <Route path="/autre/terms" element={<Terms />} />
        <Route path="/autre/privacy" element={<Privacy />} />
        <Route path="/divers/faq" element={<FaqPage />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
