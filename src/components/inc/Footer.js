import React from "react";
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr/>
                        <p className="text-white">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1">#64, New York Cubao, Q.C.</p></div>
                        <div><p className="text-white mb-1">+91 8888xxxx8</p></div>
                        <div><p className="text-white mb-1">+91 8888xxxx8</p></div>
                        <div><p className="text-white mb-1">email@domain.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;