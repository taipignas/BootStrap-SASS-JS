import React from 'react';
import styles from './nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='col-2'>
            <h3 className="text-center">Nav</h3>
            <ul className='list-unstyled'>
                <li>
                    <Link to="/">Pagrindinis</Link>
                </li>
                <li>
                    <Link to="/aside">Aside</Link>
                </li>
                <li>
                    <Link to="/contacts">Kontaktai</Link>
                </li>
                <li>
                    <Link to="/products">Produktai</Link>
                </li>
                <li>
                    <Link to="/naujienos">Naujienos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;