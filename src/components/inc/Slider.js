import React from "react";
import Technology from '../images/technology.jpg';
import Business from '../images/business.jpg';
import City from '../images/City.jpg'
import './Slider.css';

function Slider() {
    return(
        // <section className="container">
          <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={City} className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>City</h3>
        <p className="text-light fs-6">The city, one of the world’s biggest phenomenon of the 21st
century has evolved greatly over the centuries, particularly in
terms of its size, form, structure and composition, while largely
maintaining its importance in local and regional development.
In just 65 years, the world has experienced a population shift
from rural to urban, as witnessed by an increase in the global
population living in urban areas from 29.6% in 1950 to 54% in</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Technology} className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3 className="text-warning">Technology</h3>
        <p className="text-light fs-6">Technologies from around the world have been adopted to aid human life, from the most basic inventions, to complex systems that function entirely independently from the human experience. Technology has revolutionized society in countless ways; technology allowed early humans to grow their own food, navigate the open oceans, tell time, and connect society on a global scale. The transition from manual to technological methods of solving problems took place simply because relying on technology makes work easier. This lesson discusses these advancements in technology, and provides an overview of what technology is.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Business} className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3>Business</h3>
        <p className="text-light fs-6">Businesses are all about producing items or services to sell, meeting a particular need for society, and are mainly concerned with profit. Though their main focus is being profitable, businesses also focus on meeting societal needs and reaching common goals.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
// </section>
    );
}

export default Slider;