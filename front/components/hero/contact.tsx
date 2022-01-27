import styles from '../../styles/Styles.module.scss'
import contactStyles from '../../styles/Contact.module.scss'
import { useEffect, useRef } from 'react';
import { contentSectionAppear } from '../../animation/globalAnimation';

const Contact = () => {
  const contactSectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
        contentSectionAppear(contactSectionRef);
    },[]);

  return (
      <>
        <div id="contact" className={`${styles.components} ${contactStyles.contact_content} ${styles.main}`} ref={contactSectionRef}>
          <div className={styles.content}>
            <div className={styles.title_container}>
              <h2 className="titleAnimation">Contact</h2>
            </div>
            <p>Let's talk! <a>Email</a></p>
            
          </div>
        </div>
      </>
  )
};

export default Contact;
