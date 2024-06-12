import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="C/C++"/>
           <SkillList src={checkMarkIcon} skill="PYTHON"/>
           <SkillList src={checkMarkIcon} skill="JAVA(Basic)"/>
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="HTML"/>
           <SkillList src={checkMarkIcon} skill="CSS"/>
           <SkillList src={checkMarkIcon} skill="JAVASCRIPT"/>
           <SkillList src={checkMarkIcon} skill="TYPESCRIPT"/>
           <SkillList src={checkMarkIcon} skill="REACT JS"/>
        </div>
        <hr />
        <div className={styles.skillList}>
           <SkillList src={checkMarkIcon} skill="PANDAS"/>
           <SkillList src={checkMarkIcon} skill="NUMPY"/>
           <SkillList src={checkMarkIcon} skill="SCIKIT-LEARN"/>
           <SkillList src={checkMarkIcon} skill="STREAMLIT"/>
           <SkillList src={checkMarkIcon} skill="NLP(Basic)"/>
        </div>
        </section>
  )
}

export default Skills