import styles from '../../styles/Styles.module.scss'
import contactStyles from '../../styles/Contact.module.scss'

const Contact = () => {
  return (
      <>
        <section id="contact" className={contactStyles.contact_content}>
            <div className={`${styles.components} ${styles.main}`}>
                <h2>Contact</h2>
                <p>Let's talk!</p>
                <a>Email</a>
            </div>
        </section>
      </>
  )
};

export default Contact;
