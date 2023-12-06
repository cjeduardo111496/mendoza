import React from "react";
import Vmc from './inc/Vmc';

function About() {
    return(
        <div>
            <section className="py-2 bg-light">
                <div className="container">
                    <div className="row"> 
                        <div className="col-md-4 my-auto">
                            <h4 >About</h4>
                        </div>
                        {/* <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="section border-bottom">
                <div className="container">
                    <h5 className="main-heading text-center">Our Company</h5>
                    <div className="underline mx-auto"></div>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </section>

            <Vmc/>
        </div>
    )
}

export default About;