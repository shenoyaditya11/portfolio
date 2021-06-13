import 'utils/styles.css'
import {JAVA, CPP, PYTHON, REACT, ANDROID, C, HTML, CSS } from 'utils/icon'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import {staggeredVariant, popIn}  from 'utils/varients'
import {motion, useAnimation} from 'framer-motion'



export const Skills = ()=>{


    const iconHolder = {
        display:'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        width:'100%',
        paddingLeft:'10%',
        paddingRight:'10%',
        justifyContent:'center',
    }

    const animation = useAnimation();
    const [viewRef, inView] = useInView({
        threshold: .5,
    });

    useEffect(() => {
        if (inView) {
        animation.start('visible');
        }
    }, [animation, inView]);


    return (
        <div className="background" ref={viewRef} style={{marginTop:'1rem'}}>
               
                    <h2 className='header'>Technical Skills</h2>
                
                    <motion.section  initial='hidden' animate={animation} variants={staggeredVariant} style={iconHolder}>
                        <motion.span variants={popIn} ><JAVA/></motion.span>
                        <motion.span variants={popIn}><CPP/></motion.span>
                        <motion.span variants={popIn}><C/></motion.span>
                        <motion.span variants={popIn}><ANDROID/></motion.span>
                        <motion.span variants={popIn}><PYTHON/></motion.span>
                        <motion.span variants={popIn}><REACT/></motion.span>
                        <motion.span variants={popIn}><HTML/></motion.span>
                        <motion.span variants={popIn}><CSS/></motion.span>
                    </motion.section>
        </div>
    );
}