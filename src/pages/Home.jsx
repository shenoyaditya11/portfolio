import 'utils/styles.css'
import './home.css'
import {textVarient, revealVarient, staggeredVariant, slideUp} from 'utils/varients'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'

export const Home = ()=>{

 
    const line1 = ["QA Enginner at Informatica", "Passionate about programming", "Fact:- Linux > Windows"];
   
    const [displayString, setDisplayString] = useState([]);
    

    let pointer = 0;
    const textAnimator=()=>{
            console.log("inside text animator");
            let line = line1[pointer];
            let spanArray=[];
            console.log(line);
            spanArray.push(
                <motion.h2 className="colored"  variants={textVarient}>
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
            
            console.log(spanArray)
            setDisplayString([...spanArray]);
            pointer = (pointer+1)%3
            setTimeout(textAnimator, 3000); 
                                        
    }

    useEffect( ()=> {textAnimator()}, [])

    

    return (

        
            <div className="background col-flex mypage-home animation" id="home">
                 <h1>Hi, I am Aditya Shenoy!</h1>
                <motion.div variants={staggeredVariant} initial="hidden" animate='visible'>
                    {
                        displayString
                    }
                </motion.div>

            </div>
            
        
        
    );
}