import React from 'react';
import './styles.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner';
import Button from '../../components/button/button';

function Contato(){
    return(
        <>
            <Header />
            <Banner />
            <div id = "contact-container">
                <div id = "instructions">
                    <h1>Contate-nos via email</h1>
                    <p>Caso precise entrar em contato conosco, preencha o formulário com suas informações e a mensagem que deseja enviar.</p>
                </div>
                <div class = "user-info">
                    <form action="./contato.html" >
                        <label for = "firstname">Primeiro Nome</label>
                        <input type = "text" id="firstname" name="firstname" />
                        <label for = "lastname">Sobrenome</label>
                        <input type = "text" id="lastname" name="lastname" />
                        <label for = "email">Email</label>
                        <input type = "email" id="email" name="email" />
                        <label for = "message">Mensagem</label>
                        <textarea id="message" name="text"></textarea> 
                    </form>
                    <Button name='Enviar' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contato;