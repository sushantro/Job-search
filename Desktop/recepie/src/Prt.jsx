import React from 'react'
import "./Dofa.css"
import img1 from "./h.jpeg"
import About1 from "./About1"

const Prt = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-10 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>
                                Grow ur business with <strong className="brand-name">DHANDA PANI </strong>

                            </h1>
                            {/* <h2 className="my-3"> 
                            We help people to show their skills
                            </h2> */}
                            {/* <div className="mt-3 ">
                                <a href="" className="btn-get-started">Get started</a>
                            </div> */}
                            <div className="container">

                            <div class="row">
                            <div class="col text-center">
                            <a href="" className="btn-get-started">Get started</a>

                            </div>
                            </div>

                            </div>
                            



                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={img1} className="img-fluid animated" alt="homeimg" />
                        </div>
                    </div>
                </div>
               
            </section>

            <About1/>






        </>
    )
}

export default Prt
