import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === 'light' ? sun : moon
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark
    const githubIcon = theme === 'light' ? githubLight : githubDark
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

  return(
     <section id="hero" className={styles.container}>
       <div className={styles.colorModeContainer}>
        <img
        className={styles.hero} 
        src={heroImg} 
        alt="Profile picture of sree lakshmi" 
        />
        <img 
        className={styles.colorMode}
        src={themeIcon} 
        alt="Colour mode icon" 
        onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}>
        <h1>
          Eluri Sree Lakshmi
        </h1>
        <h2>Aspiring Developer</h2>
        <span>
            <a href="https://x.com/Sreelakshm38394" target="_blank">
             <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/EluriSreelakshmi" target="_blank">
             <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank">
             <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
        </span>
        <p className={styles.desciption}>As an aspiring developer,I innovate through continual learning. </p>
         <p className={styles.desciption}>With a curious minset,I explore Tech to grow my skills.</p>
         <p className={styles.desciption}>My goal is to use my expertise in creating impactful solutions.</p>
         <p className={styles.desciption}>Blending abilities and purpose,I'm driven to make real impact.</p>
        <a href={CV}>
            <button className="hover" download>
                Resume
            </button>
        </a>
    </div>
  </section>
  )
}

export default Hero
