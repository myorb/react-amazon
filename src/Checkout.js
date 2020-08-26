import React from 'react'
import './Checkout.css'
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <img
                className="checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-YzFmOWNmYTQt-w3000._CB430284057_.jpg" 
                alt=""
            />
            {basket.length === 0 ? (
                <div>
                    <h1>You basket is empty</h1>
                </div>
            ) :(
                <div>
                    <h1> LIst</h1>
                </div>
            )}
        </div>
    )
}

export default Checkout
