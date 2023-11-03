import React from 'react';
import "./competencesItem.scss";


function CompetencesItem({ name, image }) {
    return (
        <div className="item">
          <img src={image} alt={name} />
          <p>{name}</p>
        </div>
      );
    }

export default CompetencesItem;