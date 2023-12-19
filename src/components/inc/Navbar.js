import React, { useState } from "react";
import {Link} from 'react-router-dom';

function Navbar() {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 300) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return(
        <nav className={navbar ? 'navbar-dark active' : 'navbar-dark'}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        
                        <div className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                {/* <img src={Img} className="d-block img-fluid" alt="..."/> */}
                                <Link to="/" className="navbar-brand text-warning">Mendoza Brother's</Link>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                                        <li className="nav-item">
                                            <Link to="/home" className="nav-link active text-warning">Home</Link>
                                       </li>
                                        <li className="nav-item">
                                            <Link to="/about" className="nav-link active text-warning">About</Link>
                                       </li>
                                       <li className="nav-item">
                                            <Link to="/contact" className="nav-link active text-warning">Contact Us</Link>
                                       </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;