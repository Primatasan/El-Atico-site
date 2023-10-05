import { FaInstagram, FaSquareFacebook, FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";

import style from './Footer.module.scss'

import {i18n} from 'src/i18n/i18n'

const icones = [
    {'nome':FaInstagram,
    'link':'https://instagram.com'},     
    {'nome':FaSquareFacebook,
    'link':'https://facebook.com'},     
    {'nome':FaLinkedin,
    'link':'https://linkedin.com'},     
    {'nome':FaSquareWhatsapp,
    'link':'https://whatsapp.com'}
]

export default function Footer(){
    return(
        <>
            <div className={style.footerInfo}>
                <div>
                    {icones.map((e) =>{
                        const Icone = e.nome
                        return (
                            <a 
                                key={e.nome.name}
                                href={e.link} 
                                target="_blank"
                                rel="noreferrer"
                                className={style.icone}  
                            >
                                    <Icone/>
                            </a>

                        )
                    })}

                </div>
                <div>
                    <p>{i18n.t('footer.direitos')}</p>
                </div>
            </div>
        </>
    )
}