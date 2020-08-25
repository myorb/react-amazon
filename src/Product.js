import React from 'react'
import './Product.css'

function Product({id,title,img,price,rating}) {
    return (
        <div className="product">
            <div className='product__info'>
                <p>{ title }</p>
                <p className="product__price">
                    <small>$</small>
                    <string>{price}</string>
                </p>
                <div class="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>&#11088;</p>
                        ))
                    }
                </div>
            </div>
            <img src={img} alt='product' />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
