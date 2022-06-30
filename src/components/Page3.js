import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { homeAction, page2Action, page4Action, page3Action } from './../redux/actions';
import { motion } from 'framer-motion'


export default function Page3() {
    useEffect(() => {
        window.scrollTo(0, 0);  
    }, [])
    var dispatch = useDispatch()
    dispatch(homeAction(false))
    dispatch(page2Action(false))
    dispatch(page3Action(true))
    dispatch(page4Action(false))

   var ljudi = [
        ['COMANDER', 'DOUGLAS HURLEY', 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.', './images/crew/image-douglas-hurley.png'],
        ['MISSION SPECIALIST', 'MARK SHUTTELEWORTH', 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.', './images/crew/image-mark-shuttleworth.png'],
        ['PILOT', 'VICTOR GLOVER', 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.', './images/crew/image-victor-glover.png'],
        ['FLIGHT ENGINEER', 'ANOUSHEH ANSARI', 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ', './images/crew/image-anousheh-ansari.png']
    ]
    var [covjek, setCovjek] = useState(0)
    
    var [select1, setSelect1] = useState(true)
    var [select2, setSelect2] = useState(false)
    var [select3, setSelect3] = useState(false)
    var [select4, setSelect4] = useState(false)


    var text = useRef()
    var slika = useRef()
    useEffect(() => {
        text.current.style.cssText += 'transition: opacity 0.3s'
        slika.current.style.cssText += 'transition: opacity 0.3s'
    }, [])


 

    return (
        <div className="page3">
            <motion.div
            initial={covjek ? {opacity: 0} : {opacity: 0}}
            animate={covjek ? {opacity: 1} : {opacity: 1}}
            transition={{duration: 0.5}}
            className="section1">
                <div className="podSection1"><span>02</span> MEET YOUR CREW</div>
                <motion.div 
                ref={text}
                initial={covjek ? {opacity: 0} : {opacity: 0}}
                animate={covjek ? {opacity: 1} : {opacity: 1}}
                transition={{duration: 0.5, delay: 0.5}}
                className="podSection2">
                    <h2>{ljudi[covjek][0]}</h2>
                    <h1>{ljudi[covjek][1]}</h1>
                    <p>{ljudi[covjek][2]}</p>
                </motion.div>
                <div className="podSection3">
                    {select1 ? <div className="selected"></div> : <div onClick={()=>{
                        text.current.style.cssText += 'opacity: 0'
                        slika.current.style.cssText += 'opacity: 0'
                        setTimeout(() => {
                            setCovjek(0)
                            setSelect1(true)
                            setSelect2(false)
                            setSelect3(false)
                            setSelect4(false)
                            setTimeout(() => {
                                text.current.style.cssText += 'opacity: 1'
                                slika.current.style.cssText += 'opacity: 1'
                            }, 100);
                        }, 500);
                      
                    }} className="unselected"></div>}
                         {select2 ? <div className="selected"></div> : <div onClick={()=>{
                         text.current.style.cssText += 'opacity: 0'
                         slika.current.style.cssText += 'opacity: 0'
                         setTimeout(() => {
                             setCovjek(1)
                             setSelect1(false)
                             setSelect2(true)
                             setSelect3(false)
                             setSelect4(false)
                             setTimeout(() => {
                                text.current.style.cssText += 'opacity: 1'
                                slika.current.style.cssText += 'opacity: 1'
                             }, 100);
                         }, 500);
                    }} className="unselected"></div>}
                         {select3 ? <div className="selected"></div> : <div onClick={()=>{
                         text.current.style.cssText += 'opacity: 0'
                         slika.current.style.cssText += 'opacity: 0'
                         setTimeout(() => {
                             setCovjek(2)
                             setSelect1(false)
                             setSelect2(false)
                             setSelect3(true)
                             setSelect4(false)
                             setTimeout(() => {
                                text.current.style.cssText += 'opacity: 1'
                                slika.current.style.cssText += 'opacity: 1'
                             }, 100);
                         }, 500);
                    }} className="unselected"></div>}
                         {select4 ? <div className="selected"></div> : <div onClick={()=>{
                        text.current.style.cssText += 'opacity: 0'
                        slika.current.style.cssText += 'opacity: 0'
                        setTimeout(() => {
                            setCovjek(3)
                            setSelect1(false)
                            setSelect2(false)
                            setSelect3(false)
                            setSelect4(true)
                            setTimeout(() => {
                                text.current.style.cssText += 'opacity: 1'
                                slika.current.style.cssText += 'opacity: 1'
                            }, 100);
                        }, 500);
                    }} className="unselected"></div>}
                </div>
            </motion.div>
            <div className="section2">
                <motion.img
                ref={slika}
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, delay: 1, type: "spring", stiffness: 100}}
                src={ljudi[covjek][3]} alt="" />
            </div>
        </div>
    )
}
