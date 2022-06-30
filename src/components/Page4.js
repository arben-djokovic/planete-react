import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { homeAction, page2Action, page3Action, page4Action } from '../redux/actions'
import { motion } from 'framer-motion'


export default function Page4() {
    useEffect(() => {
        window.scrollTo(0, 0);  
    }, [])
    var dispatch = useDispatch()
    dispatch(homeAction(false))
    dispatch(page2Action(false))
    dispatch(page3Action(false))
    dispatch(page4Action(true))
    var lista = [
        ['LAUNCH VEHICLE', "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!", './images/technology/image-launch-vehicle-portrait.jpg'],
        ['SPACEPORT', 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.', './images/technology/image-spaceport-portrait.jpg'],
        ['SPACE CAPSULE', "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.", './images/technology/image-space-capsule-portrait.jpg'],
    ]
    var [select1, setSelect1] = useState(true)
    var [select2, setSelect2] = useState(false)
    var [select3, setSelect3] = useState(false)
    var [selected, setSelected] = useState(0)

    var text = useRef()
    var slika = useRef()
    var broj1 = useRef()
    var broj2 = useRef()
    var broj3 = useRef()

    useEffect(() => {
        broj1.current.style.cssText += 'transition: all 0.4s'
        broj2.current.style.cssText += 'transition: all 0.4s'
        broj3.current.style.cssText += 'transition: all 0.4s'
        text.current.style.cssText += 'transition: opacity 0.3s'
        slika.current.style.cssText += 'transition: opacity 0.3s'
    }, [])
    return (
        <div className="page4"> 
            <div className="naslov"><span>03 </span>SPACE LAUNCH 101</div>
            <div className="sekcije">
                <div className="section1">
                    <div className="podSection1">
                        <motion.div
                        ref={broj1}
                        initial={{opacity: 0,}}
                        animate={{opacity: 1,}}
                        transition={{duration: 0.5,}}
                        onClick={()=>{
                            text.current.style.cssText += 'opacity: 0'
                            slika.current.style.cssText += 'opacity: 0'
                            setTimeout(() => {
                                setSelected(0)
                                setSelect1(true)
                                setSelect2(false)
                                setSelect3(false)
                                setTimeout(() => {
                                    text.current.style.cssText += 'opacity: 1'
                                    slika.current.style.cssText += 'opacity: 1'
                                }, 100);
                            }, 500);
                        }} style={
                            select1 ? {backgroundColor: 'white', color: 'black'} : {backgroundColor: 'transparent', color: 'white'}
                        }>1</motion.div>
                        <motion.div
                        ref={broj2}
                        initial={{opacity: 0,}}
                        animate={{opacity: 1,}}
                        transition={{duration: 0.5, delay: 0.3}}
                         onClick={()=>{
                            text.current.style.cssText += 'opacity: 0'
                            slika.current.style.cssText += 'opacity: 0'
                            setTimeout(() => {
                                setSelected(1)
                                setSelect1(false)
                                setSelect2(true)
                                setSelect3(false)
                                setTimeout(() => {
                                    text.current.style.cssText += 'opacity: 1'
                                    slika.current.style.cssText += 'opacity: 1'
                                }, 100);
                            }, 500);
                        }} style={
                            select2 ? {backgroundColor: 'white', color: 'black'} : {backgroundColor: 'transparent', color: 'white'}
                        }>2</motion.div>
                        <motion.div
                        ref={broj3}
                        initial={{opacity: 0,}}
                        animate={{opacity: 1,}}
                        transition={{duration: 0.5, delay: 0.6}}
                         onClick={()=>{
                            text.current.style.cssText += 'opacity: 0'
                            slika.current.style.cssText += 'opacity: 0'

                            setTimeout(() => {
                                setSelected(2)
                                setSelect1(false)
                                setSelect2(false)
                                setSelect3(true)
                                setTimeout(() => {
                                    text.current.style.cssText += 'opacity: 1'
                                    slika.current.style.cssText += 'opacity: 1'
                                }, 100);
                            }, 500);
                        }} style={
                            select3 ? {backgroundColor: 'white', color: 'black'} : {backgroundColor: 'transparent', color: 'white'}
                        }>3</motion.div>
                    </div>
                    <motion.div
                    ref={text}
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, delay: 1, type: "spring", stiffness: 300 }}
                    className="podSection2">
                        <h2>THE TERMINOLOGY…</h2>
                        <h1>{lista[selected][0]}</h1>
                        <p>{lista[selected][1]}</p>
                    </motion.div>
                </div>
                <div className="section2">
                    <motion.img 
                    ref={slika}
                    initial={{opacity: 0,}}
                    animate={{opacity: 1,}}
                    transition={{duration: 0.5, delay: 1.5}}
                    src={lista[selected][2]} alt="" />
                </div>
            </div>
        </div>
        
    )
}
