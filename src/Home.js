import React from 'react'
import Product from './Product'
import "./Home.css"


function Home() {
  return (
    <div className="home">
        <img
        className="home__image" 
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
        alt="" />

        {/* Product id, title, price, rating, image */}
        <div className="home__row">
            <Product
            id="12321341"
            title="The Lean Startup: How Constant Inovation Creates Radically Successful Business Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
            <Product
            id={12312}
            title="GSM Fitness Hex Dumbbell, 7.5 kgs, Pack of 2, Rubber Coatedo"
            price={4051.00}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/417wp10uSeL.jpg"
            />
        </div>
        <div className="home__row">
        <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
            id="23445930"
            title="Amazon Echo (3rd Genration) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
            />
            <Product
            id={12312}
            title="Awestuffs LED Lights for Home Decoration (20 LED Photo Clip 3 Metre String (Warm White))"
            price={140.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41EsI0Fsf1L.jpg"
            />
        </div>
        <div className="home__row">
            <Product
            id={12312}
            title="Natural Life Fda Approved Disinfectant Surface Sanitizer, Citrus 500 Ml (Pack Of 3)"
            price={710.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61jj-MeJbvL._SL1200_.jpg"
            />
        </div>
        
        {/* Product */}
    </div>
  )
}

export default Home