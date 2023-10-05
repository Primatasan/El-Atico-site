import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer";
import FullNav from "src/components/FullNav";

import style from './DefaultPage.module.scss'


export default function DefautPage(){
    return(
        <>
            <header>
                <FullNav />
            </header>
            <main
                className={style.mainSection}
            >
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}