import 'utils/styles.css'
import './contact.css'
import {useState, useEffect} from 'react'
import {firestore} from 'utils/firebase'
import {SubmittingModal, ErrorModal} from 'Components/Modals'
import {CustomAlert} from 'Components/Toast'
import {motion, useAnimation} from 'framer-motion'
import { leftVariant, slideVariant,rightVariant} from 'utils/varients'
import { useInView } from 'react-intersection-observer'



export const Contact = ()=>{


    const [submitting, isSubmitting] = useState(false);
    const [error, setError]  = useState(false)
   

    const animation = useAnimation();
    const [viewRef, inView] = useInView({
        threshold: 0.25,
    });


    useEffect(() => {
        if (inView) {
        animation.start('visible');
        }
    }, [animation, inView]);

    
   



   let openNewWindow = (url)=>{
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    let sendMail = ()=>{
        let name = document.getElementById("name-holder");
        let email = document.getElementById("email-holder");
        let subject = document.getElementById("subject-holder");
        let query = document.getElementById("query-holder");


        if(email.value.trim() === "")
        {
            setError(true);

            return;
        }


        let dbRef = firestore.collection("Questions");


        isSubmitting(true);
        dbRef.add({

            name: name.value,
            email: email.value,
            subject: subject.value,
            query: query.value
        }).then(()=>{
            setTimeout(isSubmitting(false), 1000);
            
            name.value = "";
            email.value = "";
            subject.value = "";
            query.value = "";
        });
        

    }



   
    

    return (
           
        
        <div className="background mypage-about" id="contact">
             <SubmittingModal
             show={submitting}
             onHide = {()=> isSubmitting(false)}
            />
            
            
                
                  
            
            <div className="col-flex fullpage page-container" ref={viewRef}>
                <div className="top-about-me header">
                        <h2>Reach Out to Me!</h2>
                </div>

                <div className="body">
                    <motion.div initial="hidden" animate={animation} variants={rightVariant} className="description_div v-centered"> 
                        <p className="description">
                            You can drop me a message, with any queries and any feedback regarding this portfolio or any of my projects or anything else.
                            I will try my best to answer your queries!
                        </p>
                    
                    </motion.div>
                    <motion.div  initial="hidden" animate={animation} variants={leftVariant} className="form-container">
                        <div className="form-row">
                            <input id="name-holder" placeholder="name" className="half-width"></input>
                            <input id="email-holder" placeholder="email" className="half-width"></input>
                        </div>
                        <div className="form-row">
                            <input id="subject-holder" placeholder="subject" className="full-width"></input>
                        </div>
                        <div className="form-row">
                            <textarea  id="query-holder" placeholder="Query"className="full-width"></textarea>
                        </div>
                        <div className="form-row-send button-row">
                            <motion.button text="send" className="send" onClick={()=>sendMail()} whileHover={
                                 {boxShadow: '1px 3px #f05855'}
                            }>Send <i class="fa fa-send" aria-hidden="true"></i></motion.button>
                        </div>


                        
                    </motion.div>
                    
                </div>

                <section className='padded-bottom'>
                        <motion.div initial="hidden" animate={animation} variants={slideVariant} className="centered top-spaced">
                            <i class="contact-icon  fab fa-linkedin-in" aria-hidden="true" onClick={()=>openNewWindow("https://linkedin.com/in/aditya-shenoy-743623159")}> </i>
                            <i class="contact-icon  fab fa-github" aria-hidden="true" onClick={()=>openNewWindow("https://github.com/shenoyaditya11")} > </i>
                            <i class="contact-icon  fab fa-stack-overflow" aria-hidden="true" onClick={()=>openNewWindow("https://stackoverflow.com/users/8162191/a-shenoy")}> </i>
                        </motion.div>
                    
                        <div className="centered">
                            <p className="footer">
                                Designed By Aditya Shenoy with <i class="fa fa-heart" aria-hidden="true" style={{color:"red"}}> </i>!
                            </p>
                        </div>

                       
                </section>
               
            
            </div>
           
            <CustomAlert show={error} variant="danger" onClose={() => setError(false)} dismissible>

            </CustomAlert>
           
        </div>
    );
}