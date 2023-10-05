import { useState } from 'react'
import { Link } from 'react-router-dom'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import style from './Menu.module.scss'
import {i18n} from 'src/i18n/i18n'

import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";



export default function Menu() {

    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button 
                onClick={toggleDrawer}
                className={style.botaoAbrir}
                >
                <MenuIcon />
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                enableOverlay={false}
                lockBackgroundScroll={true}
                size={380}
            >
                
                <div className={style.wrapper}>
                    <div className={style.itemMenuWrapper}>
                        <Link className={style.itemMenu} to='/' onClick={toggleDrawer} >{i18n.t('menu.home')}</Link>
                        <Link className={style.itemMenu} to='/sobre_nos' onClick={toggleDrawer} >{i18n.t('menu.sobreNos')}</Link>
                        <Link className={style.itemMenu} to='/work' onClick={toggleDrawer} >{i18n.t('menu.servicos')}</Link>
                        <Link className={style.itemMenu} to='/form' onClick={toggleDrawer}>{i18n.t('menu.contato')}</Link>
                    </div>
                    <div onClick={toggleDrawer} className={style.closeIcon}><CloseIcon /></div>
                </div>
            </Drawer>
        </>
    )
}