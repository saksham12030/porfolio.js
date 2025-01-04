import React from 'react'
import {motion} from "framer-motion";

const variants={
  default:{width:0},
  active:{width:"calc(100% - 0.75rem)"}
}
const Tabbutton = ({active,selecttab,children}) => {
    const buttonclass = active
      ? "  text-white "
      : "text-[#ADB7BE]";
  return (
    <button onClick={selecttab} >
        <p className={`mr-3 font-semibold hover:text-white ${buttonclass}`}>
            {children}
        </p>
        <motion.div 
        animate={active?"active":"default"}
        variants={variants}
        className="h-1 bg-purple-500 mt-2 mr-3"
        >
        </motion.div>
    </button>
    
  );
}

export default Tabbutton