import logo from './Assets/Artboard 7.png'
import foto from './Assets/stuido.jpg'
import style from './SobreNos.module.scss'



export default function SobreNos() {
    return (
        <>
            <section className={style.wrapper}>
                <div className={style.info_wrapper}>
                    <div className={style.title_wrapper}>
                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                        <div>
                            <h1>
                                SOBRE
                                <br />
                                NÓS
                            </h1>
                        </div>
                    </div>
                    <div className={style.text_wrapper}>
                        <p>
                            El Ático nasceu do desejo de abrir portas, oferecer oportunidades e apresentar ao mundo novas vozes. Localizado na Cidade do México, parceiro de estúdios ao redor do mundo, El Ático está sempre buscando conectar e ampliar as possibilidades e o acesso a uma diversidade de vozes e profissionais que convertem, remixam, adaptam e expressam ideias em diferentes línguas.
                        </p>
                        <h2>GRAVAÇÃO E CASTING</h2>
                        <p>
                            Contamos com serviços de casting e gravação de vozes para qualquer tipo de projeto. Oferecemos também serviços de mixagem, masterização, sound design, foley e trilha sonora original. Contamos com um grande repertório de vozes em diferentes idiomas, com foco principal em português, inglês e espanhol, sempre buscando registrar, conhecer e treinar novas vozes.
                        </p>
                        <h2>TRADUÇÃO E LEGENDA</h2>
                        <p>
                            Tradução de textos em geral, tradução para dublagem e legendagem. Adaptação de material para diferentes regiões e projetos multilinguagem. Sempre buscamos expandir nossa gama de idiomas, mas hoje o foco principal é português, inglês e espanhol.
                        </p>
                    </div>
                </div>
                <div>
                    <div className={style.image_wrapper}>
                        <img src={foto} alt="Foto" className={style.image}/>
                    </div>
                </div>
            </section>
        </>
    )
}