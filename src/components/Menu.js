import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaPhoneAlt, FaLocationArrow, FaHome, FaAddressBook, FaRobot } from 'react-icons/fa'
import ShortUniqueId from 'short-unique-id'
import logo from '../logo.svg'

const unid = new ShortUniqueId({ lenght: 10 })

const Item = ({ title, link, Icon, setActive, setHover, setReference, reference, index, cancel, setMenu }) => {
    return(
        <a type="button" href={link} index={index} onClick={() => { setActive(index); setMenu(false) }} onMouseEnter={() => { setReference(unid()); setHover(index) }} onMouseLeave={() => cancel(reference) } className="item">
            <Icon className="icon" size={25}/>
            <span>{title}</span>
            <Icon className="icon" size={25}/>
        </a>
    )
}

function Menu(props) {
    const DATA = [
        {
            title: "Home", 
            link: "#home", 
            Icon: FaHome
        }, 
        {
            title: "Local", 
            link: "#local", 
            Icon: FaLocationArrow
        }, 
        {
            title: "Informações", 
            link: "#info", 
            Icon: FaAddressBook
        }, 
        {
            title: "Assistente", 
            link: "#chating", 
            Icon: FaRobot
        }, 
        {
            title: "Contato", 
            link: "#contact", 
            Icon: FaPhoneAlt
        }
    ]

    const cancel = (id) => {
        setTimeout(() => {
            const switcher = document.querySelector(`#switcher[reference="${id}"]`)
            if(switcher) {
                setHover(active)
                
            }
        }, 500)
    }

    const [reference, setReference] = useState()
    const [menu, setMenu] = useState(false)

    const [active, setActive] = useState(0)
    const [hover, setHover] = useState(0)

    useEffect(() => {
        const item = document.querySelector(`.item[index="${active}"]`)
        document.querySelectorAll(".item").forEach((el) => el.setAttribute("isActive", "false"))
        item.setAttribute("isActive", "true")

        setSwitcherFixedTranslation(item.getBoundingClientRect().top - 10)
        setSwitcherTranslation(item.getBoundingClientRect().top - 10)
    }, [active])

    useEffect(() => {
        const item = document.querySelector(`.item[index="${hover}"]`)

        setSwitcherTranslation(item.getBoundingClientRect().top - 10)
    }, [hover])

    const [switcherFixedTranslation, setSwitcherFixedTranslation] = useState(0)
    const [switcherTranslation, setSwitcherTranslation] = useState(0)

    const [x, setX] = useState(false)

    window.onresize = () => {
        setMenu(false)
        const item = document.querySelector(`.item[index="${active}"]`)
        setSwitcherFixedTranslation(item.getBoundingClientRect().top - 10)
        setSwitcherTranslation(item.getBoundingClientRect().top - 10)
    }

    // document.getElementById("root").onscroll = () => { setMenu(false) }

    useEffect(() => {
        !menu && setTimeout(() => setX(false), 200)
    })

    return(
        <div id="menu" show={`${menu}`}>
            <button type="button" id="x" onClick={() => { setX(true); setMenu(!menu); }}>
                <div></div>
                <div></div>
                <div></div>
            </button>
            <div id="menu_ctn">
            <div className="background" onMouseDown={() => setMenu(false)}></div>
            <div className="box">
                <div id="switcher" reference={reference} style={{ transform: `translateY(${switcherTranslation}px)` }}></div>
                <div id="switcher-fixed" style={{ transform: `translateY(${switcherFixedTranslation}px)` }}></div>
                {DATA.map((item, index) => <Item title={item.title} link={item.link} Icon={item.Icon} index={index} setReference={setReference} reference={reference} setActive={setActive} setHover={setHover} cancel={cancel} setMenu={setMenu}/>)}
                {/* <img src={logo} style={{ position: "absolute", bottom: "50px", height: "40px" }}></img> */}
            </div>
            </div>
        </div>
    )
}

export default Menu