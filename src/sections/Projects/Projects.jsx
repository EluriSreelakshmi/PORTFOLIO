import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import ipl from '../../assets/ipl.png'
import car from '../../assets/car.png'
import spam_mail from '../../assets/spam_mail.png'
import quiz from '../../assets/quiz.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return  <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
    <ProjectCard src={quiz} 
       link="https://github.com/EluriSreelakshmi/QUIZ-APPLICATION"
       h3="QUIZ APPLICATION"/>
       <ProjectCard src={viberr} 
       link="https://github.com/EluriSreelakshmi/Heart-Disease-Predictor"
       h3="HEART DISEASE PREDICTOR"/>
       <ProjectCard src={ipl} 
       link="https://github.com/EluriSreelakshmi/IPL-winning-team-predictor"
       h3="IPL WINNING TEAM PREDICTOR"/>
        <ProjectCard src={car} 
       link="https://github.com/EluriSreelakshmi/Car-Price-Pediction-model"
       h3="CAR PRICE PREDICTOR"/>
       <ProjectCard src={spam_mail} 
       link="https://github.com/EluriSreelakshmi/SPAM-MAIL-CLASSIFIER"
       h3="EMAIL SPAM CLASSIFIER"/>

    </div>
  </section>
}

export default Projects