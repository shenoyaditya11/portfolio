


export const staggeredVariant = {
  hidden: {},
  visible: {
    
    transition: {
     
      staggerChildren: 0.2,
     
    }
  }
}



export const navItemVariant = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition:{
      type:'spring'
    },
  },
};

export const slideVariant = {
  hidden: { opacity: 0, y: 1500 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, type:'spring'} },
};

export const slideUp = {
  hidden: { opacity: 0, y: 1500 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, type:'spring', ease:'easeIn', stiffness:75}},
};

export const slideUpCard = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { type:'spring'},},
};

export const leftVariant = {
  hidden: { opacity: 0, x: 50},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      default: {
        duration: 0.4,
        ease: 'easeIn',
        type: 'spring',
        stiffness: 50,
      },
    },
  },
};

export const rightVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      default: {
        duration: .4,
        ease: 'easeIn',
        type: 'spring',
        stiffness: 50,
      },
    },
  },
};
