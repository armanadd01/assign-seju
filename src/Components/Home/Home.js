import './Home.css';
import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Cart from '../Cart/Cart';


const Home = (props) => {
    const [meditation, setMeditation] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setMeditation(data));
    } ,[])

    const addToCart =(meditation) => {
        const newCartArr =[...cart, meditation];
        const uniqueCart = new Set(newCartArr);
        const newCart =[...uniqueCart];
        setCart(newCart);
    }
    console.log(addToCart)

    return (
        <div className="home">
            <div className="main-container">
                {
                    meditation.map(meditation => <Main
                        key={meditation.key}
                        meditation={meditation}
                        addToCart={addToCart}
                    >

                    </Main>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;