import React from 'react';

function Naujiena(props) {
    return (
        <div className='col-4 p-0'>
            <a href={props.url}><img src={props.src} alt=""/></a>
            <p>{props.date}</p>
            <a href={props.url}><h4>{props.title}</h4></a>
        </div>
    );
}

export default Naujiena;