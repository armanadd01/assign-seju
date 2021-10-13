import './Main.css';
import React from 'react';

const Main = (props) => {
    const { name, role, age, country, salary, img} = props.meditation;
    return (
        <div className="meditation">
            <div className="trainer-img">
                <img src={img} alt="" />
            </div>
            <div className="trainer-details">
            <h4><span>Trainer Name:</span> {name}</h4>
                <h5><span>Role:</span> {role}</h5>
                <p><span> Age:</span> {age}</p>
                <p><span> Country:</span> {country}</p>
                <p><span>Salary:</span> $ {salary} </p>
                <button
                     onClick={() => props.addToCart(props.meditation)}
                     className="btn-info"
                >Add This Band</button>
            </div>
        </div>
    );
};

export default Main;