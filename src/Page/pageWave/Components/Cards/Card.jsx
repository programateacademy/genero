import React from 'react';


function Card(props) {
    return (
        <div className="card">
            <a href="props.imageUrl https://d1ih8jugeo2m5m.cloudfront.net/2021/07/imagenes-sin-copyright-gratis.jpg" target="_blank" rel="noopener noreferrer">
                <img src={props.imageUrl} alt={props.title} />
            </a>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;