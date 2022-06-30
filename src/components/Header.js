import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Header() {

    var home = useSelector(store => store.home)
    var destination = useSelector(store => store.page2)
    var crew = useSelector(store => store.page3)
    var technology = useSelector(store => store.page4)
    var as = useRef()
    var closeNav = useRef()

    return (
        <div className="header">
            <div ref={closeNav} onClick={(e)=>{
                closeNav.current.style.cssText += 'display: none'
                as.current.style.cssText += 'right: -100vw'
            }} className="closeMobileNav"></div>
            <img src="./images/logo.svg" alt="" />
            <div className="pcNavBackground"></div>
            <div ref={as} className="pcNav">
                <Link to="/" className="link">
                    {home ? <div onClick={()=>{
                        as.current.style.cssText += 'right: -100vw'
                        closeNav.current.style.cssText += 'display: none'
                    }} style={{borderBottom: '2px solid white', opacity: 1}}><span>00</span>HOME</div> : <div onClick={()=>{
                        as.current.style.cssText += 'right: -100vw'
                        closeNav.current.style.cssText += 'display: none'
                    }} className="navHover"><span>00</span>HOME</div>}
                </Link>
                <Link to="/destination" className="link">
                    {destination ? <div onClick={()=>{
                        as.current.style.cssText += 'right: -100vw'
                        closeNav.current.style.cssText += 'display: none'
                    }} style={{borderBottom: '2px solid white', opacity: 1}}><span>01</span>DESTINATION</div> : <div onClick={()=>{
                        as.current.style.cssText += 'right: -100vw'
                        closeNav.current.style.cssText += 'display: none'
                    }} className="navHover"><span>01</span>DESTINATION</div> }
                </Link>
                <Link to="/crew" className="link">
                    {crew ? <div onClick={()=>{
                        as.current.style.cssText += 'right: -100vw'
                        closeNav.current.style.cssText += 'display: none'
                    }} style={{borderBottom: '2px solid white', opacity: 1}}><span>02</span>CREW</div> : <div onClick={()=>{
                        as.current.style.cssText += 'right: -100vw'
                        closeNav.current.style.cssText += 'display: none'
                    }} className="navHover"><span>02</span>CREW</div> }
                </Link>
                <Link to="/technology" className="link">
                    {technology ? <div onClick={()=>{
                        as.current.style.cssText += 'right: -100vw'
                        closeNav.current.style.cssText += 'display: none'
                    }} style={{borderBottom: '2px solid white', opacity: 1}}><span>03</span>TECHNOLOGY</div> : <div onClick={()=>{
                        as.current.style.cssText += 'right: -100vw'
                        closeNav.current.style.cssText += 'display: none'
                    }} className="navHover" style={{marginRight: 0}}><span>03</span>TECHNOLOGY</div>}
                </Link>
            </div>
            <div className="menu">
                <div className="open" onClick={()=>{
                    as.current.style.cssText += 'right: 0px'
                    closeNav.current.style.cssText += 'display: block'
                }}>=</div>
            </div>
        </div>
    )
}
