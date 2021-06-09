import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import {Link} from 'react-scroll'
import {withRouter} from 'react-router';
import './navigation-style.css'
import 'utils/styles.css'
import { motion } from 'framer-motion';
import {navItemVariant, staggeredVariant} from 'utils/varients'
import { useEffect, useState } from 'react';


export const  Navigation = (props) => {

   const { location } = props;
   console.log(props);
   const [width, setWidth] = useState(window.innerWidth);

   // <Navbar.Brand onClick={()=>{openInNewTab()}}><button className='roundedButton' ><i class="fa fa-download" aria-hidden="true"></i>Resume</button></Navbar.Brand>
   const url = "https://firebasestorage.googleapis.com/v0/b/sgpalyacasino.appspot.com/o/Aditya_Shenoy_Resume.pdf?alt=media&token=fa63b9d7-190b-460c-ba04-ca715e30f9f5";


   const openInNewTab = () => {
        //console.log("hello");
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

   

    const handleResize = () =>{
        setWidth(window.innerWidth);
    }


    useEffect(() => {
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      

    return width >= 600 ?(
        <div>
            <Navbar className="background elevated">
            <Navbar.Brand href="home"><motion.div initial="hidden" animate="visible" variants={navItemVariant}>
                <div className="logo" >A</div></motion.div></Navbar.Brand>
            <motion.div activeKey="home"className="r-aligned nav-holder" variants={staggeredVariant}
                initial="hidden"
                animate="visible" >
                
                <motion.div variants={navItemVariant}><Link activeClass="active" className="link" spy={true} smooth={true} to="home" duration={500}>
                    <i  className="fa fa-home icon"></i>Home</Link></motion.div>
                <motion.div  variants={navItemVariant}><Link activeClass="active" className="link" spy={true} smooth={true}  to="about" duration={500}>
                    <i  className="fa fa-user icon"></i>About</Link></motion.div>
                <motion.div  variants={navItemVariant}><Link  activeClass="active"className="link" spy={true} smooth={true}  to="work" duration={500}>
                    <i  className="fa fa-laptop icon"></i>Work</Link></motion.div>
                <motion.div variants={navItemVariant}><Link activeClass="active"  className="link" spy={true} smooth={true}  to="contact" duration={500}>  
                    <i className="fa fa-envelope icon"></i>Contact</Link></motion.div>
                <motion.div  variants={navItemVariant}><Link activeClass="active" className="link" smooth={true} spy={true} onClick={()=>{openInNewTab()}}>
                    <i className="fa fa-file icon"></i>Resume</Link></motion.div>
            </motion.div>
            </Navbar>
        </div>
   
    ): (
        <div>
            <Navbar className="background elevated virtical-navbar">
            <Navbar.Brand href="home"><motion.div initial="hidden" animate="visible" variants={navItemVariant}>
                <div className="logo" >A</div></motion.div></Navbar.Brand>
            </Navbar>
            <motion.div activeKey="home" className="vertical elevated" variants={staggeredVariant}
                initial="hidden"
                animate="visible" >
                
                <motion.div className="navbar-item" variants={navItemVariant}><Link activeClass="active" className="link" spy={true} smooth={true} to="home" duration={500}>
                    <i  className="fa fa-home icon"></i>Home</Link></motion.div>
                <motion.div className="navbar-item" variants={navItemVariant}><Link activeClass="active" className="link" spy={true} smooth={true}  to="about" duration={500}>
                    <i  className="fa fa-user icon"></i>About</Link></motion.div>
                <motion.div className="navbar-item" variants={navItemVariant}><Link  activeClass="active"className="link" spy={true} smooth={true}  to="work" duration={500}>
                    <i  className="fa fa-laptop icon"></i>Work</Link></motion.div>
                <motion.div className="navbar-item" variants={navItemVariant}><Link activeClass="active"  className="link" spy={true} smooth={true}  to="contact" duration={500}>  
                    <i className="fa fa-envelope icon"></i>Contact</Link></motion.div>
                <motion.div className="navbar-item"  variants={navItemVariant}><Link activeClass="active" className="link" smooth={true} spy={true} onClick={()=>{openInNewTab()}}>
                    <i className="fa fa-file icon"></i>Resume</Link></motion.div>
            </motion.div>
            
        </div>
    );

};

