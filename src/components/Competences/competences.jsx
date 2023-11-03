import React from 'react';
import "./competences.scss";
import data from '../../Datas/CompetencesData.json';
import Item from '../CompetencesItem/competencesItem';


function Competences() {
  return (
    <>
      <h2>COMPETENCES & OUTILS</h2>
      <div className="gallery">
      {data.map((item, index) => (
      <Item key={index} name={item.name} image={item.icon} />
    ))}
  </div>
    </>
   
  );
}

export default Competences;
