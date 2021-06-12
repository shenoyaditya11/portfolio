import 'utils/styles.css'
import './about.css'
import {JAVA, CPP, PYTHON, REACT, ANDROID, ReactComponent } from 'utils/icon'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import {leftVariant, rightVariant}  from 'utils/varients'
import {Skills} from 'Components/skills'

import photo from 'utils/ads.jpg';
import Image from 'react-bootstrap/Image'
import {motion, useAnimation} from 'framer-motion'
import { PHYTHON } from 'utils/icon'
export const About = ()=>{


    const animation = useAnimation();
    const [viewRef, inView] = useInView({
        threshold: 0.25,
    });

    useEffect(() => {
        if (inView) {
        animation.start('visible');
        }
    }, [animation, inView]);

    
    

    return (



        <section className="background mypage-about" id="about">
            <section className="col-flex page-container" id="about">
                
                <h2 className="header">About Me</h2>
            
                <div className="content-row-flex center" ref={viewRef}>
                    
                    <motion.div initial="hidden" animate={animation} variants={rightVariant} className="col-left text-content">
                        <p>
                        I am Aditya Shenoy, currently working as a R&D QA Engineer at Informatica.
                        <br/>I am passionate about programming and strive to write structured code, always  interested in designing android application. Currently trying to learn Front-end development with React-Js.
                        <br/>I have experience of working on Informatica Power Center, IDQ and IICS  and Microsoft Dynamics CRM 
                        <br/>My favorite language is JAVA (I love structured code),  C++,  React JS(just started and already loving it).
                        <br/>3 start on codechef and active on stackoverflow
                        <br/><span style={{color:'#FF9F1C', fontStyle:'normal'}}>Technical Skills other than programming languages:-</span> 
                        <br/>Data structures, Linux
                        <br/><span style={{color:'#FF9F1C', fontStyle:'normal'}}>Fun facts:-</span>
                        <br/>I get my dopamine shots on board of 64 squares
                        <br/>I am FRIENDS fan
                        </p>
                            
                    </motion.div>   
                    <div className= "col-right" style={{"padding-left":0}}>
                        <motion.div initial="hidden" animate={animation} variants={leftVariant} id="pic-holder" >
                        <Image className="img" src={photo} fluid>
                            </Image>
                        </motion.div>
                    </div>

                </div>
                <Skills/>

                
            </section>
        </section>
    );
}