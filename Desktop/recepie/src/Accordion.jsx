import React, { useState } from 'react'
import{question} from "./Api"
import Myaccordion from './Myaccordion'
import"./Acoord.css"


const Accordion = () => {
    const[data,setdata]=useState(question)
    return (
        <div>
            <section className="main-div">
                <h1>MOSTLY ASKED QUESTIONS</h1>

           
            {
                data.map((curr)=>{
                    return <Myaccordion key={curr.id } {...curr}/>

                })
            }
             </section>


           
            
        </div>
    )
}

export default Accordion
