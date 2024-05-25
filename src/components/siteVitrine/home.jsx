import Header from "./Header/header";
import Hero from "./hero/hero";
import AboutUs from "./abousUs/aboutUs";
//import FeaturedCard from './featured/FeaturedCard'
//import Featured from "./featured/Featured";
import PropertyList from "./categoryCard/categorie";
//import Statics from "./statics/statics";
import Footer from "./footer/footer";
import './home.css'
import ContactUs from "./contactUs/contactUs";
const Home = () => {
    return ( 
        <>
        <Header/>
        <Hero/>
        <div className="homeContainer">
          <PropertyList/>
          <AboutUs/>
          <br/>
          <ContactUs/>
          <Footer/>
        </div>
       
        </>
     );
}
 
export default Home;