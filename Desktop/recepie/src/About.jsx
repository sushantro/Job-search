import React from 'react'
import img1 from  "./rahul.jpeg"
import img2 from "./sush.jpeg"

const About = () => {
    const mid = {
        width: "100%",
    }
 

    return (
        <>

            <div className="about-section">
                <h1>About Us Page</h1>
                <p>WE THE PROVIDER OF DHANDA PANI WHICH AIMS TO PROVIDE LOCALS A PLACE WHERE THEY CAN EARN MONEY  </p>
                <p>AAU SATH MEIN APNA DESH BADAYE.</p>
            </div>
            <h2 >THE UNITED TEAM SUPPORT</h2>


            <div className="column">
                <div className="card">
                    <img src={img1} alt="Mike" style={mid}/>
                        <div className="container">
                            <h2>Rahul maheshwari</h2>
                            <p className="title">CEO</p>
                            <p>He is a great developer who have efficient knowldege about javascript reactjs nodejs</p>
                            <p>WORKED AT AMAZON CAMP K12 TEXTBOOK.COM </p>
                            <p>rahulmaheshwari@gmail.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>   

                </div>
            </div>


            <div className="column">
                <div className="card">
                    <img src={img2} alt="Mike" style={mid}/>
                        <div className="container">
                            <h2>SUSHANT PANIGRAHI</h2>
                            <p className="title">FRONTEND</p>
                            <p>He is a great developer who have efficient knowldege about javascript reactjs  python nodejs </p>
                            <p>SUSHANT PANIGRAHIi@gmail.com</p>
                            <p><button className="button">Contact</button></p>-
                        </div>   

                </div>
            </div>


</>










    )
}



export default About
