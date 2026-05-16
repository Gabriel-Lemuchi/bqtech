import "./home.css"
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <>
            <main>
                <div id="text_section">
                    <h1>Seu negócio no próximo nível digital</h1>
                    <h2>Sites profissionais, automações e serviços administrativos</h2>
                </div>
                <img src='/BQ_Home.png'/>
                <div id="button_section">
                <Link to="/about">
                    <button id="about_button">Saiba Mais:</button>
                </Link>    
                </div>            
            </main>
        </>
    ) 
}

export default Home;