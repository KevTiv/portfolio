import styles from '../../styles/Styles.module.scss'
import contactStyles from '../../styles/Contact.module.scss'
import { useEffect, useRef } from 'react';
import { contentSectionAppear } from '../../animation/globalAnimation';
import { contactOptionHoverOn } from '../../animation/contatcAnimation';
import { menuOptionHoverOff } from '../../animation/navbarAnimation';

const Contact = () => {
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const Email=()=>{
    return(
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2.25rem" height="2.25rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78L6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z" fill="currentColor"/></svg>
    )
  } 
  const Github=()=>{
    return(
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2.25rem" height="2.25rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor"/></g></svg>
    )
  }
  const Linkedin=()=>{
    return(
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2.25rem" height="2.25rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388zm-5.5 10.403h3.208V9.25H4.208v10.54zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0z" fill="currentColor"/></g></svg>
    )
  }
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
            <div>
              <p>Let's talk!</p>
              <a onMouseEnter={(e)=>contactOptionHoverOn(e)} onMouseLeave={(e)=>menuOptionHoverOff(e)}><Email/></a> 
              <a onMouseEnter={(e)=>contactOptionHoverOn(e)} onMouseLeave={(e)=>menuOptionHoverOff(e)}><Linkedin/></a> 
              <a onMouseEnter={(e)=>contactOptionHoverOn(e)} onMouseLeave={(e)=>menuOptionHoverOff(e)}><Github/></a>
            </div>
          </div>
        </div>
      </>
  )
};

export default Contact;
