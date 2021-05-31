// import React from 'react'
// import imh from "./OIP.jpeg"

const About1 = () => {
    return (
        <>
        <section className="main_heading my-5">
            <div className="text-center">
                <h1 className="display-4">About us</h1>
                <hr className="w-25 mx-auto"/>
            </div>
        </section>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                    <figure>
                        <img src="https://media.istockphoto.com/vectors/freelance-work-vector-id1216649345?k=6&m=1216649345&s=170667a&w=0&h=tLHUThOAojzS4qRTj9d4aaqVAXf0Y3T1vgPOnjcCCb8=" alt="about" className="img-fluid about-img"/>
                    </figure>
                    

                </div>
                <div className="col-lg-6 col-md-6 col-12 col-xxl-6 TEXT">
                        <h1>My journey</h1>
                        <p> WE AS A DEVELOPER CREATED A WEBSITE DURING LOCKDOWN WHICH CAN HELP PEOPLE TO EARN MONEY 
                            AND REMOTELY WORK FOR THE PEOPLE WHO WANT THEIR WORK DONE
                        </p>
                        <button type="button" className="btn btn-outline-info">know more </button>
                    </div>
            </div>
        </div>


        </>
    )
}

export default About1
