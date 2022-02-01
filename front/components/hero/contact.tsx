import styles from '../../styles/Styles.module.scss'
import contactStyles from '../../styles/Contact.module.scss'
import { useEffect, useRef, MouseEvent } from 'react';
import { contentSectionAppear, titleAnimation } from '../../animation/globalAnimation';

const Contact = () => {
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const ballRef = useRef<HTMLDivElement>(null);
  const titleHoverOn = (e:MouseEvent)=>{
      titleAnimation(e.clientX, ballRef);
      
  }

  const Email=<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3.45vw" height="3.45vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M15.448 7.021c2.443 0 4.745 1.083 6.432 2.776v.005c0-.813.547-1.428 1.303-1.428h.192c1.193 0 1.432 1.125 1.432 1.48l.005 12.635c-.083.828.855 1.256 1.376.724c2.025-2.083 4.452-10.719-1.261-15.719c-5.328-4.667-12.479-3.896-16.281-1.276c-4.041 2.792-6.624 8.959-4.115 14.755c2.74 6.319 10.573 8.204 15.235 6.324c2.36-.953 3.448 2.233.995 3.276c-3.697 1.577-14 1.416-18.812-6.917C-1.302 18.027-1.13 8.125 7.496 2.995C14.089-.932 22.788.156 28.032 5.631c5.48 5.729 5.163 16.448-.187 20.615c-2.423 1.895-6.021.052-5.995-2.709l-.027-.9c-1.687 1.671-3.932 2.651-6.375 2.651c-4.833 0-9.088-4.256-9.088-9.084c0-4.88 4.255-9.181 9.088-9.181zm6.079 8.834c-.183-3.537-2.808-5.667-5.98-5.667h-.12c-3.656 0-5.687 2.88-5.687 6.145c0 3.661 2.453 5.973 5.672 5.973c3.593 0 5.952-2.629 6.124-5.739z" fill="#212529"/></svg>
  const Linkedin=<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="4vw" height="4vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="#212529"><path d="M17 13.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601h-2.144s.029-5.842 0-6.447H12.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902zM8.213 7.271C7.48 7.271 7 7.753 7 8.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V10.38H7.127v6.447z"/><path d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10z"/></g></svg>
    
  useEffect(() => {
      contentSectionAppear(contactSectionRef);
  },[]);

  return (
      <>
        <div id="contact" className={`${styles.components} ${contactStyles.contact_content} ${styles.main}`} ref={contactSectionRef}>
          <div className={styles.content}>
            <div className={styles.title_container} onMouseEnter={(e)=>titleHoverOn(e)}>
              <div className={styles.ball_slide} ref={ballRef}>
                  <span className={styles.ball}></span>
              </div>
              <h2 className="titleAnimation">Contact</h2>
              <h2 className="titleAnimation">Contact</h2>
              <h2 className="titleAnimation">Contact</h2>
            </div>
            <div>
              <p>Let's talk!</p>
              <a >{Email}</a> 
              <a >{Linkedin}</a> 
            </div>
          </div>
        </div>
      </>
  )
};

export default Contact;
