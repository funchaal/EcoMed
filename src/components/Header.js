import React, { useEffect, useState } from 'react'
import logo from '../logo.svg'
import Menu from './Menu'

let time

export default function Header() {

    const [scroll, setScroll] = useState(0)
    const [header, setHeader] = useState("fixed")

    document.getElementById("root").onscroll = (e) => {
        const atual_scroll = e.target.scrollTop
        const header_el = document.querySelector("header")
        const x = document.getElementById("x")
        console.log(atual_scroll)
        if(atual_scroll > 200) {
            clearTimeout(time)
            setHeader("float")
            if(atual_scroll < scroll) {
                header_el.setAttribute("shown", true)
            } else {
                clearTimeout(time)
                x.setAttribute("hide", true)
                header_el.setAttribute("shown", false)
            }
        } else {
            if (atual_scroll == 0) {
                x.setAttribute("hide", false)
            } else {
                header_el.setAttribute("shown", false)
                x.setAttribute("hide", true)
            }
            if(scroll > 200) {
                time = setTimeout(() => {
                    setHeader("fixed")
                }, 200)
            }
        }

        setScroll(e.target.scrollTop)
    }
    return(
        <header className={header}>
            <img src={logo} className="logo"></img>
            <div className="button-box">
                <a href="#local">Ver local</a>
                <a href="#contact">Contato</a>
            </div>
            <Menu/>
        </header>
    )
}