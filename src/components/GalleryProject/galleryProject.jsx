import React from 'react';
import projects from '../../Datas/ProjectsData.json';
import './galleryProject.scss';

import BookiImage from "../../styles/img/Booki.png";
import OhMyFoodImage from "../../styles/img/ohmyfood.png";
import SophieBluelImage from "../../styles/img/sophie-bluel.png";
import NinaCarducciImage from "../../styles/img/Ninacarducci.png";
import KasaImage from "../../styles/img/Kasa.png";
import ArgentBankImage from "../../styles/img/argentBank.png";

function GalleryProject() {
  return (
    <div>
      <h2 id="project" className='titleProject'>MES PROJETS</h2>

      <section className="mesProjets">
        <div className="contenairAllProject">
          {projects.map((project, index) => {
            let image = null;
            switch (project.imageFileName) {
              case "Booki.png":
                image = BookiImage;
                break;
              case "ohmyfood.png":
                image = OhMyFoodImage;
                break;
              case "sophie-bluel.png":
                image = SophieBluelImage;
                break;
              case "Ninacarducci.png":
                image = NinaCarducciImage;
                break;
              case "Kasa.png":
                image = KasaImage;
                break;
              case "argentBank.png":
                image = ArgentBankImage;
                break;
              default:
                break;
            }

            return (
              <div key={index} className="containerTextImage">
                <div className="textProject">{project.title}</div>
                <a href={project.githubLink}>
                  <img src={image} alt={`Projet ${project.title}`} />
                  <span>Cliquer pour voir</span>
                </a>
                <div className="description-project">
                  <div className="competences">
                    <h3>Descriptions</h3>
                    <ul>
                      {project.description.map((item, index) => (
                        <li key={index}>{item}</li>
          ))}
                    </ul>
                  </div>
                  <div className="competences">
                    <h3>Compétences</h3>
                    <ul>
                      {project.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
          ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default GalleryProject;
