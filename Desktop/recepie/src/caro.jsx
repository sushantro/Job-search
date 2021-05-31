import React from 'react'
import "./Dofa.css";
import FormDialog from "./Modal"

export default function Caro (){
  return (
   
<div id="demo" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2017/11/29/23/22/lathe-2987295__480.jpg" alt="jo" width="1100" height="500"/>
      <div className="carousel-caption">
        <h1 className=".animated bounceInRight" >WELCOME TO DHANDA PANI</h1>
        <p className=".animated bounceInLeft" >WE HELP EACH OTHER TO GROW</p>
        <FormDialog/>
      </div>   
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.InxFKfEKlr3x37dI4n9HegHaD9?w=331&h=180&c=7&o=5&dpr=1.47&pid=1.7" alt="Chicago" width="1100" height="500"/>
      <div className="carousel-caption">
        <h2>WE BUILD RELATIONSHIP</h2>
        <p>HELP AND GROW </p>
      </div>   
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/11/29/23/22/lathe-2987295__480.jpg" alt="New York" width="1100" height="500"/>
      <div className="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
    </div>
  </div>
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>
  )
}

