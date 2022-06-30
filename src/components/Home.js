import React, { useEffect 
} from 'react'
import { useDispatch } from 'react-redux';
// import { motion } from 'framer-motion'
import {motion} from 'framer-motion'
import { homeAction, page2Action, page4Action, page3Action } from './../redux/actions';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);  
    }, [])
    var dispatch = useDispatch()
    dispatch(homeAction(true))
    dispatch(page2Action(false))
    dispatch(page3Action(false))
    dispatch(page4Action(false))
    return (
        <div
        className="home">
            <motion.div 
             initial={{opacity: 0,}}
             animate={{opacity: 1}}
             transition={{duration: 1, delay: 0.2}} 
             className="text">
                    <h2>SO, YOU WANTED TO TRAVEL TO</h2>
                    <h1>SPACE</h1>
                   <h3>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</h3>
            </motion.div>
        </div>
    )
}
