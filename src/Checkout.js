import React from 'react'
import './Checkout.css'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://m.media-amazon.com/images/G/01/digital/video/sonata/DE_SUperhero_Acquisition_HO_July2019/7efd1e4c-560a-43d4-b2ea-c07b41672ee0._UR3000,600_SX1500_FMwebp_.jpg" 
                    alt=""
                />
                {basket === undefined || basket?.length === 0 ? (
                    <div>
                        <h1>You basket is empty</h1>
                    </div>
                ) :(
                    <div className="checkout__list">
                        <h1 className="checkout__title">You shopping list</h1>
                        {basket.map(item => (
                            <CheckoutProduct 
                                key={item.id}
                                {...item}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className="checkout__right">
                <h2>Subtotal</h2>
            </div>
        </div>
    )
}

export default Checkout
