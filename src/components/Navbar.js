import React from 'react'

const Navbar = () => {
    return (
        <div className='container mx-2'>
            <h3 style={{ textAlign: 'center', color: 'rgba(11, 101, 94)' }}>Redux-Toolkit Admin Table </h3>
            <ul className="nav  nav-fill" style={{ backgroundColor: 'rgba(11, 101, 94)', color: 'white' }}>
                <li className="nav-item" style={{ listStyle: 'none' }}>
                    <a className="nav-link disabled" aria-current="page" href="#"  ><h6 style={{ color: 'white' }}>Home</h6></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#"><h6 style={{ color: 'white' }}>About</h6></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"><h6 style={{ color: 'white' }}>Projects</h6></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"><h6 style={{ color: 'white' }}>Contact-Us</h6></a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar