import React from 'react';

function Card(props) {
    const {jsonArray} = props;

    return (
        <div className="card-list">
            {jsonArray.map((card, index) => (
                <div className="card" key={index}>
                    <h3>{card.title}</h3>
                    <img src={card.image} alt={card.title} />
                    <p>{card.description}</p>
                </div>
            ))}
       <h1>Recursos</h1> 
        </div>
    );
}

export default Card;
