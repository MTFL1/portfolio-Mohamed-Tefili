import Emoji from "../../styles/img/bigo.png";
import "./contactForm.scss";
import 'font-awesome/css/font-awesome.min.css';

function ContactForm() {
  return (
    <section id="contact" className="contenairContactForm">
        <h2>CONTACT</h2>
      <div className="emojiText">
        <img src={Emoji} alt="emoji qui fait signe de téléphoner" />
        <span>Vous avez un projet ? Discutons-en !</span>
      <i className="fa fa-phone">&ensp;+33 6.27.23.59.76</i>
      </div>
        <div id="contactMoov">
          <a href="mailto:mohamed.tefili@gmail.com" className="ButtonEnvoyer">
            <button>Envoyer un e-mail</button>
          </a>
        </div>
    </section>
  );
}

export default ContactForm;
