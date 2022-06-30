import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { homeAction, page2Action, page4Action, page3Action } from './../redux/actions';
import { motion } from 'framer-motion'


export default function Page2() {
    useEffect(() => {
        window.scrollTo(0, 0);  
    }, [])
    var dispatch = useDispatch()
    dispatch(homeAction(false))
    dispatch(page2Action(true))
    dispatch(page3Action(false))
    dispatch(page4Action(false))

    var planets = [
        ['MOON','See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.','384,400 KM','3 DAYS', './images/destination/image-moon.png'],
        ['MARS','Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest jos malo tektaaaaaaa zasto nzm ni ja!','225 MIL. KM','9 MONTHS', './images/destination/image-mars.png'],
        ['EUROPA','The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.','628 MIL. KM','3 YEARS', './images/destination/image-europa.png'],
        ['TITAN', 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.', '1.6 BIL. KM','7 YEARS', './images/destination/image-titan.png']
    ]
    var [planeta, setPlaneta] = useState(0)
    var [sel1, setSel1] = useState(true)
    var [sel2, setSel2] = useState(false)
    var [sel3, setSel3] = useState(false)
    var [sel4, setSel4] = useState(false)
    var text = useRef()
    var slika = useRef()
    useEffect(() => {
        text.current.style.cssText += 'transition: opacity 0.3s'
        slika.current.style.cssText += 'transition: opacity 0.3s'
    }, [])

    return (
        <div className="page2">
            <div className="section1">
                <h1><span>01</span> PICK YOUR DESTINATION</h1>
                <motion.img ref={slika} initial={{opacity: 0, x: -200, rotate: 60}}
            animate={{opacity: 1, x: 0, rotate: 0}}
            transition={{duration: 0.4, delay: 0.5, type: "spring", stiffness: 100}} src={planets[planeta][4]} alt="" />
            </div>
            <motion.div
            ref={text}
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 1, type: "spring", stiffness: 200}}
             className="section2">
                <div className="page2nav">
                    {sel1 ? <h3 style={{borderBottom: '1px solid white', opacity: 1}} onClick={()=>{
                        setPlaneta(0)}}>MOON</h3> : <h3 onClick={()=>{
                        text.current.style.cssText += 'opacity: 0'
                        slika.current.style.cssText += 'opacity: 0'
                        setTimeout(() => {
                            setSel1(true)
                            setSel2(false)
                            setSel3(false)
                            setSel4(false)
                            setPlaneta(0)
                            setTimeout(() => {
                                text.current.style.cssText += 'opacity: 1'
                                slika.current.style.cssText += 'opacity: 1'
                            }, 100);
                        }, 500);
                        }}>MOON</h3>}
                    {sel2 ? <h3 style={{borderBottom: '1px solid white', opacity: 1}} onClick={()=>{
                        setPlaneta(1)}}>MARS</h3> : <h3 onClick={()=>{
                            text.current.style.cssText += 'opacity: 0'
                            slika.current.style.cssText += 'opacity: 0'
                            setTimeout(() => {
                                setSel1(false)
                                setSel2(true)
                                setSel3(false)
                                setSel4(false)
                                setPlaneta(1)
                                setTimeout(() => {
                                    text.current.style.cssText += 'opacity: 1'
                                    slika.current.style.cssText += 'opacity: 1'
                                }, 100);
                            }, 500);}}>MARS</h3>}
                    {sel3 ? <h3 style={{borderBottom: '1px solid white', opacity: 1}} onClick={()=>{
                        setPlaneta(2)}}>EUROPA</h3> : <h3 onClick={()=>{
                            text.current.style.cssText += 'opacity: 0'
                            slika.current.style.cssText += 'opacity: 0'
                            setTimeout(() => {
                                setSel1(false)
                                setSel2(false)
                                setSel3(true)
                                setSel4(false)
                                setPlaneta(2)
                                setTimeout(() => {
                                    text.current.style.cssText += 'opacity: 1'
                                    slika.current.style.cssText += 'opacity: 1'
                                }, 100);
                            }, 500);}}>EUROPA</h3>}
                    {sel4 ? <h3 style={{borderBottom: '1px solid white', opacity: 1}} onClick={()=>{
                        setPlaneta(3)}}>TITAN</h3> : <h3 onClick={()=>{
                            text.current.style.cssText += 'opacity: 0'
                            slika.current.style.cssText += 'opacity: 0'
                            setTimeout(() => {
                                setSel1(false)
                                setSel2(false)
                                setSel3(false)
                                setSel4(true)
                                setPlaneta(3)
                                setTimeout(() => {
                                    text.current.style.cssText += 'opacity: 1'
                                    slika.current.style.cssText += 'opacity: 1'
                                }, 100);
                            }, 500);}}>TITAN</h3>}
                </div>
                <motion.h1 initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1 }}
            transition={{duration: 0.5, delay: 1.5}}>{planets[planeta][0]}</motion.h1>
                <div className="page2text">
                    {planets[planeta][1]}
                </div>
                <div className="info">
                    <div><h5>AVG. DISTANCE</h5> <h2>{planets[planeta][2]}</h2></div>
                    <div className="info2"><h5>EST. TRAVEL TIME</h5> <h2>{planets[planeta][2]}</h2></div>
                </div>
            </motion.div>
        </div>
    )
}
