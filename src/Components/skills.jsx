import 'utils/styles.css'
import {JAVA, CPP, PYTHON, REACT, ANDROID, C, HTML, CSS } from 'utils/icon'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import {leftVariant, rightVariant}  from 'utils/varients'




export const Skills = ()=>{


    const iconHolder = {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        paddingLeft:'10%',
        paddingRight:'10%',
        justifyContent:'center',
    }

    return (
        <div className="background">
               
                    <h2 className='header'>Technical Skills</h2>
                
                    <section style={iconHolder}>
                        <JAVA/>
                        <CPP/>
                        <C/>
                        <ANDROID/>
                        <PYTHON/>
                        <REACT/>
                        <HTML/>
                        <CSS/>
                    </section>
        </div>
    );
}