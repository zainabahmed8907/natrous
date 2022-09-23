import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItems';

const CartContainer = () => {
    const { quantity, cartItems, total } = useSelector(state => state.cart);
    if (quantity < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>Your cart</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>

            </section>
        )
    }
    return (
        <>
            <section className='cart'>
                <header>
                    Your bag
                </header>
                <div>
                    {cartItems.map(item => {
                        return (
                            <CartItem key={item.id} item={item} />
                        )
                    })}
                </div>
                <footer>
                    <hr />
                    <div className='cart-total'>
                        <h4>total<span>${total}</span></h4>
                    </div>
                    <button className='btn clear-btn'>Clear Cart</button>
                </footer>
            </section>

        </>
    )
}

export default CartContainer