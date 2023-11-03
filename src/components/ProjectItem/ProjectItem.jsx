import React from 'react';
import PropTypes from 'prop-types';
import './ProjectItem.scss';

function ProjectItem({ title, imageUrl, githubLink, description, skills }) {
  return (
    <div className="containerTextImage">
      <div className="textProject">{title}</div>
      <a href={githubLink}>
        <img src={imageUrl} alt={`Projet ${title}`} />
      </a>
      <div className="description-project">
        <div className="competences">
          <h3>Descriptions</h3>
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="competences">
          <h3>Compétences</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectItem;
