import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalTrainer = 0;
    let total = 0;

    for ( const trainer of cart){
        if (!trainer.quantity){
            trainer.quantity = 1;
        }

        total = total + trainer.salary;
        totalTrainer = totalTrainer + trainer.quantity;

    }
    return (
        <div className="cart-section">
            <div className="total-section">
                <h3>Band Added</h3>
                <h5>Total Band Added: {totalTrainer}</h5>
                <p>Total:  {total} </p>
            </div>
                {/* this section for listing short data of band */}
                {
                    cart.map(meditation => <div className="band-section"><img src={meditation.img} alt="" /><h5>{meditation.name}</h5></div>)
                }
            
            
        </div>
    );
};

export default Cart;

