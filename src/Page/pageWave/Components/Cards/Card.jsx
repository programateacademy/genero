import React, { useState, useEffect } from 'react';
import '../../styles.css';

function Card(props) {
    const { jsonArray } = props;
    
    const rotateTexts = ['Empoderate', 'Feminismo', 'Genero'];
    const [currentRotateIndex, setCurrentRotateIndex] = useState(0);
    const [currentRotateText, setCurrentRotateText] = useState(rotateTexts[0]);

    useEffect(() => {

        const interval = setInterval(() => {
            const newIndex = (currentRotateIndex + 1) % rotateTexts.length;
            setCurrentRotateIndex(newIndex);
            setCurrentRotateText(rotateTexts[newIndex]);
        }, 5000); //

        return () => clearInterval(interval);
    }, [currentRotateIndex]);

    return (
        <div className="card-list">
            {jsonArray.map((card, index) => (
                <div className="card-1" key={index}>
                    <div className='img-container'>
                        <img src={card.image} alt={card.title} />
                    </div>
                    <div className='text-container'>
                        <h4 className='analytics'>
                            <span className="txt-rotate" data-period="1000" data-rotate={JSON.stringify(rotateTexts)}>
                                <span className="wrap">{currentRotateText}</span>
                            </span>
                        </h4>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
