import React from 'react';
import Picture from "../../styles/img/coucou.png";
import "./banner.scss";

function Banner() {
  return (
    <div className='banner'>
      <div className="image-container">
        <img src={Picture} alt="pic" />
      </div>
      <div className="presentation">
        <h2>Mohamed Tefili</h2>
        <h3>Intégrateur Web</h3>
          <p>Intégrateur web passionné, je transforme vos designs en sites web interactifs. Maîtrisant HTML, CSS, JavaScript et son framework React, je crée des expériences numériques exceptionnelles. Travaillons ensemble pour donner vie à votre vision en ligne.</p>
      </div>
    </div>
  );
}

export default Banner;
