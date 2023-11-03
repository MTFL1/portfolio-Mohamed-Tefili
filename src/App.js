import Banner from "./components/Banner/banner"
import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import GalleryProject from "./components/GalleryProject/galleryProject";
import ContactForm from "./components/ContactForm/contactForm";
import Competences from "./components/Competences/competences";

function App() {
  return (
          <div>
        <Header/>
        <Banner/>
        <GalleryProject/>
        <Competences/>
        <ContactForm/>
        <Footer/>
          </div>
  );
}

export default App;
