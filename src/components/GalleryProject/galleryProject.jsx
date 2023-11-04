import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem.jsx';
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
            <ProjectItem
              key={index}
              title={project.title}
              imageUrl={image}
              githubLink={project.githubLink}
              description={project.description}
              skills={project.skills}
            />
          );
        })}
      </div>
    </section>
    </div>
    
  );
}

export default GalleryProject;
