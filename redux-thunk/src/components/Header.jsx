import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='flex justify-between p-2'>
            <h1>Redux Thunk</h1>

            <nav>
                <ul className='flex gap-2'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/post">Post</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header