import styles from '../../styles/Styles.module.scss'
import contactStyles from '../../styles/Contact.module.scss'
import { useEffect, useRef, MouseEvent } from 'react';
import { contentSectionAppear, isClickable, isNotClickable } from '../../animation/globalAnimation';

const Contact = () => {
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const Email= <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3.5vw" height="3.5vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M26.07 3.996a2.974 2.974 0 0 0-.933.223h-.004c-.285.113-1.64.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l.062-.024s-.359.118-.734.375a2.03 2.03 0 0 0-.586.567c-.184.27-.332.683-.277 1.11c.09.722.558 1.155.894 1.394c.34.242.664.355.664.355h.008l4.883 1.645c.219.703 1.488 4.875 1.793 5.836c.18.574.355.933.574 1.207c.106.14.23.257.379.351a1.119 1.119 0 0 0 .246.106l-.05-.012c.015.004.027.016.038.02c.04.011.067.015.118.023c.773.234 1.394-.246 1.394-.246l.035-.028l2.883-2.625l4.832 3.707l.11.047c1.007.442 2.027.196 2.566-.238c.543-.437.754-.996.754-.996l.035-.09l3.734-19.129c.106-.472.133-.914.016-1.343a1.807 1.807 0 0 0-.781-1.047a1.872 1.872 0 0 0-1.067-.27zm-.101 2.05c-.004.063.008.056-.02.177v.011l-3.699 18.93c-.016.027-.043.086-.117.145c-.078.062-.14.101-.465-.028l-5.91-4.531l-3.57 3.254l.75-4.79l9.656-9c.398-.37.265-.448.265-.448c.028-.454-.601-.133-.601-.133l-12.176 7.543l-.004-.02l-5.836-1.965v-.004l-.015-.003a.27.27 0 0 0 .03-.012l.032-.016l.031-.011s5.211-2.196 10.508-4.426c2.652-1.117 5.324-2.242 7.379-3.11c2.055-.863 3.574-1.496 3.66-1.53c.082-.032.043-.032.102-.032z" fill="#252422"/></svg>
  const Linkedin= <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3.5vw" height="3.5vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z" fill="#252422"/></svg>
    
  useEffect(() => {
      contentSectionAppear(contactSectionRef);
  },[]);

  return (
      <>
        <div id="contact" className={`${styles.components} ${contactStyles.contact_content} ${styles.main}`} ref={contactSectionRef}>
          <div className={styles.content}>
            <div className={styles.title_container}>
              <h1 className="titleAnimation">Contact</h1>
              <h1 className="titleAnimation">Contact</h1>
              <h1 className="titleAnimation">Contact</h1>
            </div>
            <div>
              <p>Let's talk!</p>
              <a className={styles.click} onMouseEnter={isClickable} onMouseLeave={isNotClickable}>{Email}</a> 
              <a className={styles.click} onMouseEnter={isClickable} onMouseLeave={isNotClickable}>{Linkedin}</a> 
            </div>
          </div>
        </div>
      </>
  )
};

export default Contact;
