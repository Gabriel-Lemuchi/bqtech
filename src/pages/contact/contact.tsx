import "./contact.css"

const Contact = () => {

    return(
        <>
            <main>
                <div id="text_section">
                    <h1>Entre em contato conosco:</h1>
                    <h2>Solicite um orçamento com um preço acessível:</h2>
                </div>
                 <div id="cards_section">
                    <div className="cards">
                        <img src="/redes-sociais.png" width="40px"/>
                        <h2>Redes Sociais</h2>
                        <h3>Conheça nosso trabalho</h3>
                        <p>Acompanhe projetos e novidades da BQ Tech:</p>
                        <div className="icons">
                            <a href="https://www.instagram.com/bqtechsolutions/" target="_blank">
                             <img src="/instagram.png" width="40px"/>
                            </a>
                            <a href="https://www.linkedin.com/company/bq-tech-solutions/" target="_blank">
                             <img src="/linkedin.png" width="40px"/>
                            </a>
                        </div>
                    </div>
                    <div className="cards">
                        <img src="/whatsapp.png" width="40px"/>
                        <h2>Whatsapp</h2>
                        <h3>Atendimento rápido</h3>
                        <p>Tire dúvidas e solicite um orçamento diretamente pelo WhatsApp:</p>
                        <a href="https://wa.me/5532991787737" target="_blank">
                            <button className="contact_button">Falar no Whatsapp</button>
                        </a>
                    </div>
                    <div className="cards">
                        <img src="/e-mail.png" width="40px"/>
                        <h2>E-mail</h2>
                        <h3>Contato profissional</h3>
                        <p>Envie sua ideia ou necessidade para nosso e-mail: bqtechsolutions@gmail.com</p>
                        </div>    
                    </div>
            </main>
        </>
    ) 
}

export default Contact;