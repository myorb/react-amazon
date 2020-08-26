import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";

function Product({id,title,img,price,rating}) {
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue()

    const addToBasket  = () =>{
        dispatch({
            type:'ADD_TO_BASKET',
            item: {id,title,img,price,rating}
        })
    }

    return (
        <div className="product">
            <div className='product__info'>
                <p className='product__title'>{ title }</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_,i) => (
                            <span aria-label="star" role="img" key={i}>&#11088;</span>
                        ))
                    }
                </div>
            </div>
            <img src={img} alt='product' />
            <button onClick={addToBasket} >Add to basket</button>
        </div>
    )
}

export default Product
