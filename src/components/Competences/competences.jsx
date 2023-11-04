import React from 'react';
import "./competences.scss";
import data from '../../Datas/CompetencesData.json';
import CompetencesItem from '../CompetencesItem/competencesItem';

import HTMLImage from '../../styles/img/HTML.png';
import CSSImage from '../../styles/img/CSS.png';
import SASSImage from '../../styles/img/SASS.png';
import JSImage from '../../styles/img/JS.png';
import ReactImage from '../../styles/img/REACT.png';
import ReduxImage from '../../styles/img/REDUX.png';
import GitImage from '../../styles/img/GIT.png';
import GithubImage from '../../styles/img/GITHUB.png';
import FigmaImage from '../../styles/img/FIGMA.png';
import SwaggerImage from '../../styles/img/SWAGGER.png';

function CompetencesGallery() {
  return (
    <div>
      <h2 className="titleProject">COMPÉTENCES & OUTILS</h2>
      <section className="gallery">
          {data.map((competence, index) => {
            let image = null;
            switch (competence.image) {
              case "HTML.png":
                image = HTMLImage;
                break;
              case "CSS.PNG":
                image = CSSImage;
                break;
              case "SASS.png":
                  image = SASSImage;
                break;
              case "JS.png":
                image = JSImage;
                break;
              case "REACT.png":
                image = ReactImage;
                break;
              case "REDUX.png":
                image = ReduxImage;
                break;
              case "GIT.png":
                image = GitImage;
                break;
              case "GITHUB.png":
                image = GithubImage;
                break;
              case "FIGMA.png":
                image = FigmaImage;
                break;
              case "SWAGGER.png":
                image = SwaggerImage;
                break;
              default:
                break;
            }

            return (
              <CompetencesItem
                key={index}
                name={competence.name}
                image={image}
              />
            );
          })}
      </section>
    </div>
  );
}

export default CompetencesGallery;
