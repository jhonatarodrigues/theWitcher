import React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/button'

export default props => (
    <ul className='navigation'>
        <li className='activeNav'>
            <Link to='/home'>
                <Button title='Trailers' />
            </Link>
        </li>
        <li>
            <Link to='/login'>
                <Button title='Logout' />
            </Link>
        </li>
    </ul>
)