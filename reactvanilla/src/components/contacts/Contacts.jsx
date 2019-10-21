import React from 'react';
import styles from './contacts.scss';
function Contacts() {
    return (
        <div className="col">
            <h3>Kontaktai</h3>
            <ul >
                <li className='d-inline-block px-3'>firma1</li>
                <li className='d-inline-block px-3'>firma2</li>
            </ul>
        </div>
    );
}

export default Contacts;