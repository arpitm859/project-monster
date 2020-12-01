import React from 'react';
import './card.styles.css'

export const Card = (props) =>{
    return <div className='card-container'>
        <img alt="monster image" src={`https://robohash.org/${props.monster.id}?size=180x180`}></img>
        <h2 key={props.monster.id}>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
}
