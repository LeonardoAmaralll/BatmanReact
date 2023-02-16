import React from 'react';
import './styles.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner';
import profpic from '../../assets/blankprofile.webp'
import fullstar from '../../assets/fullstar.png'
import emptystar from '../../assets/emptystar.png'


function Comentarios(){
    return(
        <>
            <Header />
            <Banner />
            <div id="comentarios">
                <h1>Comentários</h1>
            </div>

            <div class="comment-section">
                <div class="comment p1">
                    <img src={profpic} class="user-pic" />
                    <h3>João</h3>
                    <div class="star">
                        <img src={fullstar} />
                        <img src={fullstar} />
                        <img src={fullstar} />
                        <img src={fullstar} />
                        <img src={fullstar} />
                    </div>
                    <p>Muito bom o filme, espero que tenha uma sequência</p>
                </div>
                <div class="comment p2">
                    <img src={profpic} class="user-pic" />
                    <h3>Pedro</h3>
                    <div class="star">
                        <img src={fullstar} />
                        <img src={fullstar} />
                        <img src={fullstar} />
                        <img src={emptystar} />
                        <img src={emptystar} />
                    </div>
                    <p>Muito bom o filme, porém ainda curto os mais antigos</p>
                </div>
                <div class="comment p3">
                    <img src={profpic} class="user-pic" />
                    <h3>Larissa</h3>
                    <div class="star">
                        <img src={fullstar} />
                        <img src={fullstar} />
                        <img src={fullstar} />
                        <img src={fullstar} />
                        <img src={fullstar} />
                    </div>
                    <p>Gosto demais desse ator, encaixou muito bem no filme</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Comentarios;