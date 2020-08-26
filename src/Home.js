import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image" 
                alt="bg" 
                src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-YzFmOWNmYTQt-w3000._CB430284057_.jpg" 
            />
            <div className="home__row">
                <Product 
                    id='1'
                    title='the tetet etaeta edsas'
                    price={12.34}
                    rating={5}
                    img="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/mso/card/desk-mso-ms-758x608._SY608_CB445597548_.jpg"
                />
                <Product 
                    id='2'
                    title='the tetet etaeta edsas'
                    price={12.34}
                    rating={5}
                    img="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/mso/card/desk-mso-ms-758x608._SY608_CB445597548_.jpg"
                 />
            </div>
            <div className="home__row">
                <Product 
                    id='3'
                    title='the tetet etaeta edsas'
                    price={12.34}
                    rating={5}
                    img="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/mso/card/desk-mso-ms-758x608._SY608_CB445597548_.jpg"
                />
                <Product 
                    id='4'
                    title='the tetet etaeta edsas'
                    price={12.34}
                    rating={5}
                    img="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/mso/card/desk-mso-ms-758x608._SY608_CB445597548_.jpg"
                 />
                 <Product 
                    id='5'
                    title='the tetet etaeta edsas'
                    price={12.34}
                    rating={5}
                    img="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/mso/card/desk-mso-ms-758x608._SY608_CB445597548_.jpg"
                 />
            </div>
        </div>
    )
}

export default Home
