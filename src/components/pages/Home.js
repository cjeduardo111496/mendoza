import React from "react";
import { Link } from "react-router-dom";
import Slider from '../inc/Slider';
import Vmc from './inc/Vmc';
import Service1 from '../images/Web.jpg';
import Service2 from '../images/socmed.jpg';
import Service3 from '../images/design.jpg';

function Home() {
    return(
        <div>
            <Slider/>
        
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                        <h3 className="main-heading">Our Company</h3>
                        <div className="underline mx-auto"></div>
                        <p>
                        Virtual Pro Software Development Services is a small company that started last January of 2021. It was built in order to give a better opportunity to people from the Philippines' countryside in the field of Information Technology. The founder is a Software Engineer who is passionate in sharing the knowledge that he gained for the last two decades of experience. He recruited members from his family, neighbors and friends, who showed interest in his line work. He invited those that were not given the opportunity to practice their profession due to lack of opportunities and who wanted a change of career.
                        </p>
                        <Link to="/about" className="btn btn-warning shadow"> Read More </Link>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Vision and Mission */}
            <Vmc/>

            {/* Services */}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="Services"/> 
                                <div className="card-body">
                                    <h6>Services 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                    </p>
                                    <Link to="/services" target="_blank" className="btn btn-warning button_position" role="button">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service2} className="w-100 border-bottom" alt="Services"/>    
                                <div className="card-body">
                                    <h6>Services 2</h6>
                                    <div className="underline"></div>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                    </p>
                                    <Link to="/services" target="_blank" className="btn btn-warning button_position" role="button">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service3} className="w-100 border-bottom" alt="Services"/>    
                                <div className="card-body">
                                    <h6>Services 3</h6>
                                    <div className="underline"></div>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                    </p>
                                    <Link to="/services" target="_blank" className="btn btn-warning button_position" role="button">Read more</Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;