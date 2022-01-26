import styles from '../../styles/Styles.module.scss'
import contactStyles from '../../styles/Contact.module.scss'

const Contact = () => {
  return (
      <>
        <div id="contact" className={`${styles.components} ${contactStyles.contact_content} ${styles.main}`}>
            <div className={styles.title_container}>
              <h2 className="titleAnimation">Contact</h2>
            </div>
            <p>Let's talk!</p>
            <a>Email</a>
        </div>
      </>
  )
};

export default Contact;
