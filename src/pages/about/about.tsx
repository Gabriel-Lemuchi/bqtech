import "./about.css"
import { Link } from "react-router-dom";

const About = () => {

    return(
        <>
            <main>
                <div id="text_section">
                    <h1>Quais serviços oferecemos?</h1>
                    <h2>A BQ Tech oferece os seguintes serviços:</h2>
                </div>
                <div id="card_section">
                    <div id="card_web" className="card">
                        <img src="/web.png" width="40px"/>
                        <h2>Serviços web</h2>
                        <div className="buttons">
                            <button>Landing Pages</button>
                            <button>Sites Institucionais</button>
                            <button>Cardápios Onlines</button>
                            <button>Integração com whatsapp</button>
                            <button>Design Responsivo</button>
                        </div>
                    </div>
                    <div id="card_auto" className="card">
                        <img src="/auto.png" width="40px"/>
                        <h2>Automações</h2>
                        <div className="buttons">
                            <button>Chatbots</button>
                            <button>Sistemas Personalizados</button>
                            <button>Integrações</button>
                        </div>
                    </div>
                    <div id="card_adm" className="card">
                        <img src="/admin.png" width="40px"/>
                        <h2>Serviços Administrativos</h2>
                        <div className="buttons">
                            <button>Planilhas</button>
                            <button>Relatórios</button>
                            <button>Dashboards</button>
                        </div>    
                    </div>
                    <div id="card_ti" className="card">
                        <img src="/pc.png" width="40px"/>
                        <h2>Formatações</h2>
                        <div className="buttons">
                            <button>Windows 10</button>
                            <button>Windows 11</button>
                            <button>Linux</button>
                            <button>Dual Boot</button>
                        </div>
                        <span>(Recolho e entrego apenas em Barbacena)</span>
                    </div>
                </div>
                <Link to="/contact">
                    <button id="fale_conosco">FALE CONOSCO</button>
                </Link>    
            </main>
        </>
    ) 
}

export default About;