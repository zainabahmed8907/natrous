import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'

const CartItem = ({ item }) => {
    return (
        <>
            <article className='cart-item'>
                <img src={item.img} alt="item-img" />
                <div>
                    <h4>{item.title}</h4>
                    <h4 className='item-price'>${item.price}</h4>
                    <button className='remove-btn'>remove</button>
                </div>
                <div>
                    <button className='amount-btn'>
                        <ChevronUp />
                    </button>
                    <p className='amount'>{item.amount}</p>
                    <button className='amount-btn'>
                        <ChevronDown />
                    </button>


                </div>

            </article>
        </>
    )
}

export default CartItem