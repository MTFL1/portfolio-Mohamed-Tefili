import React from "react";
import "./galleryProject.scss";
import Booki from "../../styles/img/Booki.png";
import Ohmyfood from "../../styles/img/ohmyfood.png";
import NinaCarducci from "../../styles/img/Ninacarducci.png";
import SophieBluel from "../../styles/img/sophie-bluel.png";
import Kasa from "../../styles/img/Kasa.png";
import ArgentBank from "../../styles/img/argentBank.png";

function GalleryProject() {
    return (
        <section>
            <h2>Mes Projets</h2>
            <div className="contenairAllProject">
                <div className="containerTextImage">
                    <div className="textProject">BOOKI</div>
                    <a href="https://github.com/MTFL1/Booki.git">
                        <img src={Booki} alt="Projet Booki" />
                    </a>
                    <div className="description-project">
                        <div className="competences">
                            <h3>Descriptions</h3>
                             <ul>
                                <li>À partir d'une maquette Figma,</li>
                                <li>réalisation d'un site statique</li>
                                <li>en HTML et CSS,</li>
                                <li>sans framework et responsive.</li>
                            </ul>
                        </div>
                        <div className="competences">
                            <h3>Compétences</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="containerTextImage">
                    <div className="textProject">OH MY FOOD</div>
                    <a href="https://github.com/MTFL1/OhMyFood.git">
                        <img src={Ohmyfood} alt="Projet Ohmyfood" />
                    </a>
                    <div className="description-project">
                        <div className="competences">
                            <h3>Descriptions</h3>
                            <ul>
                            <li>À partir d'une maquette Figma,</li>
                                <li>réalisation d'un site 'Mobile First'</li>
                                <li>en HTML et CSS,</li>
                                <li>avec animations.</li>
                            </ul>
                        </div>
                        <div className="competences">
                            <h3>Compétences</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Animations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="containerTextImage">
                    <div className="textProject">PORTFOLIO SOPHIE BLUEL</div>
                    <a href="https://github.com/MTFL1/P6_Portfolio.git">
                        <img src={SophieBluel} alt="Projet SophieBluel" />
                    </a>
                    <div className="description-project">
                        <div className="competences">
                            <h3>Descriptions</h3>
                            <ul>
                                <li>À partir d'une page statique,</li>
                                <li>de Swagger et d'un backend,</li>
                                <li>réalisation d'un site dynamique</li>
                                <li>en HTML, SASS et JavaScript.</li>
                            </ul>
                        </div>
                        <div className="competences">
                            <h3>Compétences</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>FIGMA</li>
                                <li>JAVASCRIPT</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="containerTextImage">
                    <div className="textProject">PORTFOLIO NINA CARDUCCI</div>
                    <a href="https://github.com/MTFL1/NinaCarducci.git">
                        <img src={NinaCarducci} alt="Projet NinaCarducci" />
                    </a>
                    <div className="description-project">
                        <div className="competences">
                            <h3>Descriptions</h3>
                            <ul>
                                <li>À partir d'un site existant,</li>
                                <li>réalisation de l'optimisation,</li>
                                <li>de l'accessibilité et</li>
                                <li>du référencement naturel.</li>
                            </ul>
                        </div>
                        <div className="competences">
                            <h3>Compétences</h3>
                            <ul>
                                <li>HTML</li>
                                <li>LIGHTHOUSE</li>
                                <li>WAVE</li>
                                <li>SCHEMA.ORG</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="containerTextImage">
                    <div className="textProject">KASA</div>
                    <a href="https://github.com/MTFL1/kasa.git">
                        <img src={Kasa} alt="Projet Kasa" />
                    </a>
                    <div className="description-project">
                        <div className="competences">
                            <h3>Descriptions</h3>
                            <ul>
                                <li>À partir d'un fichier JSON</li>
                                <li>et d'une maquette Figma,</li>
                                <li>réalisation d'un site dynamique</li>
                                <li>en HTML, SASS</li>
                                <li>et React.</li>
                            </ul>
                        </div>
                        <div className="competences">
                            <h3>Compétences</h3>
                            <ul>
                                <li>HTML</li>
                                <li>SASS</li>
                                <li>FIGMA</li>
                                <li>REACT</li>
                                <li>REACT ROUTER</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="containerTextImage">
                    <div className="textProject">ARGENT BANK</div>
                    <a href="https://github.com/MTFL1/ArgentBank-website.git">
                        <img src={ArgentBank} alt="Projet ArgentBank" />
                    </a>
                    <div className="description-project">
                        <div className="competences">
                            <h3>Descriptions</h3>
                            <ul>
                                <li>À partir d'un design</li>
                                <li>réalisé en HTML et CSS,</li>
                                <li>d'un backend express/mongoDB,</li>
                                <li>réalisation d'une application bancaire</li>
                                <li>en React et en utilisant Redux-Toolkit.</li>
                            </ul>
                        </div>
                        <div className="competences">
                            <h3>Compétences</h3>
                            <ul>
                                <li>REACT</li>
                                <li>REDUX</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GalleryProject;
