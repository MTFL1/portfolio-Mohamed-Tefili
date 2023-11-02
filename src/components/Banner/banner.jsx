import './banner.scss'
import Emoji from "../../styles/img/coucou.png";
import "./banner.scss";

function Banner() {
    return (
<div className='banner'>
{/*<img classname="background-banner" src={BackGround} alt="ciel étoilé" />*/}
  <img src={Emoji} alt="emoji qui fait coucou" />
    <div className="presentation">
    <span>Bonjour !</span>
    <span>Intégrateur web passionné, je transforme vos designs en sites web interactifs. Maîtrisant HTML, CSS, JavaScript et d'autres technologie, je crée des expériences numériques exceptionnelles.</span>
    <span> Travaillons ensemble pour donner vie à votre vision en ligne.</span>
  </div>

</div>
    );
  }
  
  export default Banner;