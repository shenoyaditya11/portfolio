import java from 'utils/icons/java.svg'
import cpp from 'utils/icons/cpp.svg'
import react from 'utils/icons/structure.svg'
import python from 'utils/icons/python.svg'
import android from 'utils/icons/android.svg'
import html from 'utils/icons/html.svg'
import css from 'utils/icons/css.svg'
import c from 'utils/icons/c.svg'

const defaultStyle = {
    width:'3rem',
    height:'3rem',
    marginLeft:'1rem',
    marginRight:'1rem'
}

export const CPP = (props)=>{


    return(
        <img src={cpp} style={ props.style === undefined ? defaultStyle : props.style} />
    );
}

export const JAVA = (props)=>{


    return(
        <img src={java} style={ props.style === undefined ? defaultStyle : props.style} />
    );
}
export const PYTHON = (props)=>{


    return(
        <img src={python} style={ props.style === undefined ? defaultStyle : props.style} />
    );
}
export const ANDROID = (props)=>{


    return(
        <img src={android} style={ props.style === undefined ? defaultStyle : props.style} />
    );
}
export const REACT = (props)=>{


    return(
        <img src={react} style={ props.style === undefined ? defaultStyle : props.style} />
    );
}

export const C = (props)=>{


    return(
        <img src={c} style={ props.style === undefined ? defaultStyle : props.style} />
    );
}

export const HTML = (props)=>{


    return(
        <img src={html} style={ props.style === undefined ? defaultStyle : props.style} />
    );
}

export const CSS = (props)=>{


    return(
        <img src={css} style={ props.style === undefined ? defaultStyle : props.style} />
    );
}