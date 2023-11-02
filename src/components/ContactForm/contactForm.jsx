import Emoji from "../../styles/img/bigo.png";
import "./contactForm.scss";

function ContactForm() {
  return (
    <section id="contact" className="contenairContactForm">
      <div>
      <img src={Emoji} alt="emoji qui fait signe de téléphoner" />

      </div>
      <div>
      <h2>Contact</h2>
        <span>Vous avez un projet ? Discutons-en !</span>
        <form action="#" method="post">
          <label htmlFor="name">Nom</label>
          <input type="text" name="name" id="name" autoComplete="name" /> 
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" autoComplete="email" /> 
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" autoComplete="message" /> 
          <input type="submit" value="Envoyer" />
        </form>
      </div>

      </section>
  );
}

export default ContactForm;
