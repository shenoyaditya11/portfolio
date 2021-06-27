import Table from 'react-bootstrap/Table'
import './faces.css'
export const FrontFace = (props)=>{

    return(
        <section style={{...props.style, display:'flex', justifyContent:'center', backfaceVisibility:'hidden'}}>
            <img src={props.src} style={{...props.style, position:'absolute'}}></img>
            <span style={{fontFamily: 'Saira Semi Condensed', width:"100%", position:'absolute', marginBottom:'0', marginTop:'80%', padding:'4%', backgroundColor:'rgba(0,0,0,.2)'}}>{props.name} </span>
        </section>
    );

}

export const BackFace =(props)=>{


    
   let openNewWindow = (url, event)=>{
    
    event.preventDefault();
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

    return(
        <table responsive style={props.style}>
            <tr style={{padding:'.2rem .2rem'}}>
                <td colSpan='2'>
                    {props.project.name}
                </td>
            </tr>
            <tr>
                <td colSpan='2'>
                   { props.project.desc}
                </td>
            </tr>
            <tr>
                <td>
                    Github:- 
                </td>
                <td>
                   <i class="card-icon fab fa-github" aria-hidden="true" onClick={()=>openNewWindow(props.project.git, event)} > </i>
                </td>
            
            </tr>
            <tr>
                <td>
                    Project link:- 
                </td>
                <td>
                    <i class="card-icon fa fa-link" aria-hidden="true" onClick={(event)=>openNewWindow(props.project.url, event)} > </i>
                </td>
                
               
            </tr>
        </table>
    );

}