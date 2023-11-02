import Banner from "./components/Banner/banner"
import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import GalleryProject from "./components/GalleryProject/galleryProject";
import ContactForm from "./components/ContactForm/contactForm";

function App() {
  return (
          <>
        <Header/>
        <Banner/>
        <GalleryProject/>
        <ContactForm/>
        <Footer/>
          </>
  );
}

export default App;
