import React from 'react'; 
import Menu from '../components/menu/Menu';
import Footer from '../components/footer/Footer';
import HomeHead from '../components/home/HomeHead';
import HomeNewArticle from '../components/home/HomeNewArticle';
import HomeNewPlace from '../components/home/HomeNewPlace';
import '../style/style-home.css';
import DarkModeForm from '../components/darkmode/DarkModeForm';

const Home = () => { 
    return (
      <div>
        <Menu />
        <DarkModeForm />
        <HomeHead />
        <hr />
        <h2>Nouveautés</h2>
        <HomeNewArticle />
        <HomeNewPlace />
        <Footer />
      </div>
    );
}; 

export default Home;
