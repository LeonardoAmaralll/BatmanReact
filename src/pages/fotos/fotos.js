import React from 'react';
import './styles.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner';
import pic1 from '../../assets/batpic1.jpg'
import pic2 from '../../assets/batpic2.webp'
import pic3 from '../../assets/batpic3.jpg'
import pic4 from '../../assets/batpic4.jpg'

function Fotos(){
    return(
        <>
            <Header />
            <Banner />
            <div class="pictures">
                <div class="pictures-container">
                    <figure class="pic foto-1">
                        <img src={pic1} class="galeria-img" />
                    </figure>
                    <figure class="pic foto-2">
                        <img src={pic2} class="galeria-img" />
                    </figure>
                    <figure class="pic foto-3">
                        <img src={pic3} class="galeria-img" />
                    </figure>
                    <figure class="pic foto-4">
                        <img src={pic4} class="galeria-img" />
                    </figure>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Fotos;