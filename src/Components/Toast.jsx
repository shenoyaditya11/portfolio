import { Backdrop } from "@material-ui/core";
import { useEffect, useState } from "react";
import {motion, useAnimation} from 'framer-motion';



export const Toast = (props)=>{

    const [show , isShowing] = useState(props.show);
    const timeOut = props.delay === undefined ? '2000' : props.delay;
    const type = {'success':'#5cb85c', 'danger':'#d9534f', 'warning':'#f0ad4e'}

    useEffect(()=>{
        isShowing(props.show);
    });


    useEffect(()=>{
        if(show === true){
            console.log("reached here");
            setTimeout(props.onTimeout, timeOut);
        }
    },[show]);



    const toastStyle = {
        display: props.show === true? 'flex' : 'none',
        flexDirection:'column',
        position:'fixed',
        width:'30%',
        height:'10%',
        top: '20px',
        right:'20px',
        zIndex:1,
        border:'1px',
        backgroundColor: props.type===undefined? type.warning : type[props.type],
        borderRadius:'10px',
        opacity:'0.9',
        transition: 'transform .6s ease-in'
    }

    const success = {
        backgroundColor:'#5cb85c',
    }


return(
    <>
        <div style={toastStyle} >
            <div >
                {props.header}
            </div>
            <div >
                {props.body}
            </div>
        </div>
    </>
    )
}