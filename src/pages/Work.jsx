
import { useInView } from 'react-intersection-observer';
import Spinner from 'react-bootstrap/Spinner';
import './work.css';
import {FlipCard} from 'Components/Flipcards';
import {FrontFace, BackFace} from 'Components/Frontface'
import { useEffect, useState } from 'react';
import {firestore} from 'utils/firebase';
import { motion, useAnimation } from 'framer-motion';
import {slideUpCard, staggeredVariant} from 'utils/varients';


export const Work = ()=>{


    const [projectCardDetails, addCards] = useState([]);

    const [loading, isLoading] = useState(true);

    const [cardHolder, updateCardHolder] = useState([])


    
    const animation = useAnimation();
    const [viewRef, inView] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
        animation.start('visible');
        }
    }, [animation, inView]);



    
    

   


    useEffect(()=>{


        console.log("inside useEffect");
        let dbRef = firestore.collection("projects");
        

        let projects = [];
        let cards = [];
        dbRef.onSnapshot((result) => {

            cards = [];
            projects = [];
            result.forEach(
               
                (projectDetails) => {
                    
                    let project = {id:projectDetails.id, ...projectDetails.data()};
                    projects.push(project);
                    
                  // firebasestorage.refFromUrl(project.img).getDownloadURL().then((url)=> console.log(url));

                            fetch(project.img).then(result=>result.blob())
                            .then(
                                image=> {

                                    let url = URL.createObjectURL(image)
                                   
                                    cards.push(
                                    
                                        <motion.div key={project.id} variants={slideUpCard} 
                                            whileHover={
                                                {scale:1.1, transition:{ duration:.1}}
                                            }>
                                            
                                            <FlipCard front={<FrontFace style={{width:"100%", height:"100%", borderRadius:"1rem"}} src={url} name={project.name}/>}
                                                      back = { <BackFace project={project} style={{width:"100%", height:"100%", borderRadius:"1rem", color:'white', fontFamily: 'Saira Semi Condensed'}}/>}
                                                      
                                            >
    
                                            </FlipCard>
                                            
                                            
                                           
                                        </motion.div>
                                    );
                                    console.log("added 1 ", cards)      
                                   
                                    if(projects.length === cards.length){
                                        updateCardHolder([...cards])
                                        isLoading(false);
                                    }

                                }
                            );
                                    //console.log(result);
                                    
                               


                                
                           
                            
                            
                       

                    
                    
                    
                
               
                
            });

            
 
        });


        
        
    }, []);
    


 


    return loading===true?(
        <div className='h-centered'>
         <Spinner 
            style={{'margin-top':'25%'}}
            as="span"
            animation="border"
            variant="warning"
            role="status"
            aria-hidden="true"
        
        />
      </div>) : (
        <div className ="mypage mypage-work" id="work" ref={viewRef}>
                <h2 className="header">Projects</h2>
                <motion.div variants={staggeredVariant}
                initial="hidden"
                animate={animation} className="grid_body">
                    {cardHolder}
                </motion.div>
        </div>
    )
}