import React from 'react';
import '../../styles.css'

function Card(props) {
    const {jsonArray} = props;

    return (
        <div className="card-list">
            {jsonArray.map((card, index) => (
                <div className="card-1" key={index}>
                    <div className='img-container'>
                        <img src={card.image} alt={card.title} />
                    </div>
                    <div className='text-container'>
                        <h4 className='analytics'>Analytics</h4>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;