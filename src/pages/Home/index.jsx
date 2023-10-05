import { i18n } from 'src/i18n/i18n'
import { useState } from 'react'
import style from './Home.module.scss'
import logo from './Asset/tipografia.png'
import { Link } from 'react-router-dom'

export default function Home() {

    const [aLigado, setALigado] = useState(false)
    const [cLigado, setCLigado] = useState(false)

    function mostrarTextoA() {
        setALigado((prevState) => !prevState)
    }

    function mostrarTextoC() {
        setCLigado((prevState) => !prevState)
    }

    return (
        <>
            <div className={style.wrapper}>
                <div>
                    <div className={aLigado === false ? style.emptyDivA : style.emptyDivOpen} >
                        <h2>{i18n.t('home.botao01')}</h2>
                    </div>
                    <Link to='/sobre_nos'>
                        <div className={style.logoBotton}
                            onMouseEnter={mostrarTextoA}
                            onMouseLeave={mostrarTextoA}
                        >
                        </div>
                    </Link>
                </div>
                <div>
                    <div className={cLigado === false ? style.emptyDivC : style.emptyDivOpen}>
                        <h2>{i18n.t('home.botao02')}</h2>
                    </div>
                    <div
                        className={style.logoTop}
                        onMouseEnter={mostrarTextoC}
                        onMouseLeave={mostrarTextoC}
                    ></div>
                    <div className={style.logoWrapper}>
                        <img
                            src={logo}
                            alt='Logo'
                            className={style.logo}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}