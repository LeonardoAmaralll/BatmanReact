import React from 'react';
import './styles.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner';
import trailer from '../../assets/trailer.mp4'
import Button from '../../components/button/button';
import Card from '../../components/card/card';

function Home(){
    return(
        <>
            <Header />
            <Banner />
            <div id = "trailer-container">
                <div class = "content">
                    <video controls class = "trailer">
                        <source src = {trailer} type = "video/mp4" />
                        Seu navegador não possui suporte para vídeos
                    </video>
                    <div id = "sinopse">
                        <p id = "description">
                            Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas
                            mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece
                            como a personificação da vingança para a população.
                        </p>
                        <Button name='Comprar Ingresso' />
                    </div>
                </div>
            </div>
            <Card />
            <Footer />
        </>
    )
}

export default Home;