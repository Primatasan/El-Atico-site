import Menu from "src/components/Menu";
import LangNav from "src/components/LangNav";

import style from './FullNav.module.scss'

export default function FullNav(){
    return(
        <>
            <div className={style.menuBar}>
                <Menu />
                <LangNav />
            </div>
        </>
        )
}