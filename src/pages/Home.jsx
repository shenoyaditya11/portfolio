import 'utils/styles.css'
import './home.css'
import {textVarient, revealVarient, staggeredVariant, slideUp} from 'utils/varients'
import {motion, onAnimationComplete} from 'framer-motion'
import { useEffect, useState } from 'react'

export const Home = ()=>{

 
    const line1 = ["----QA Enginner at Informatica----", "----Passionate about programming----", "----Fact:- Linux > Windows----"];
   
    const [displayString, setDisplayString] = useState([]);
    

    let pointer = 0;
    const textAnimator=()=>{
            setDisplayString([])
            //console.log("inside text animator");
            let line = line1[pointer];
            let spanArray=[];
            //console.log(line);
            spanArray.push(
                <motion.h2 className="colored"  initial="hidden" animate='visible' variants={textVarient} 
                onAnimationComplete={
                    defination=>{
                        //console.log("done", defination)
                        pointer = (pointer+1)%3;
                        
                        textAnimator();
                    }
                }>
                {
                    line.split("").map((char, index)=>{
                        return(
                            <motion.span key={index} variants={revealVarient}>
                                {char}
                            </motion.span>
                        );
                    })
                }
                
            </motion.h2>
            );
            
            //console.log(spanArray)
            setDisplayString([...spanArray]);
            
           
                                        
    }

   

    

    return (

        
            <div className="background col-flex mypage-home animation" id="home">
                <motion.span initial='hidden' animate='visible' variants={slideUp} onAnimationComplete={
                    defination=>{
                        textAnimator();
                    }
                 }>
                 <h1>I am</h1>
                 <span style={{fontSize:'3rem', fontStyle:'italic'}} > 𝓐𝓭𝓲𝓽𝔂𝓪 𝓢𝓱𝓮𝓷𝓸𝔂</span>
                 </motion.span>
                <motion.div>
                    {
                        displayString
                    }
                </motion.div>

            </div>
            
        
        
    );
}