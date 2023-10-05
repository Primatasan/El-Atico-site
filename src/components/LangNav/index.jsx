import style from './LangNav.module.scss'

import brasil from './assets/br.png'
import eua from './assets/eua.png'
import mx from './assets/mx.png'


export default function LangNav(){

    const I18N_STORAGE_KEY = 'i18nextLng'

    function handleSelectChange (event){
        localStorage.setItem(I18N_STORAGE_KEY, event.target.name)
        location.reload()
    }

    return(
        <>
            <nav>
                <button className={style.botaoIdioma} 
                    onClick={handleSelectChange} 
                    value='pt-BR'> 
                        <img src={brasil} 
                            alt="Traduzir site para o português"
                            name='pt-BR'/>
                </button>
                <button className={style.botaoIdioma} 
                    onClick={handleSelectChange} 
                    value='en-US'>
                        <img src={eua} 
                            alt="eTRaduzir site para o inglês"
                            name='en-US'/>
                </button>
                <button className={style.botaoIdioma} 
                    onClick={handleSelectChange} 
                    value='es-MX'>
                            <img src={mx} 
                            alt="eTRaduzir site para o inglês"
                            name='es-MX'/>
                </button>
            </nav>
        </>
    )
}