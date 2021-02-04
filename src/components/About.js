import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import woman from './woman.jpg';

function About() {
  return (
        <MDBContainer id="About" style={{width:"100vw", marginTop: "30vh"}} className="w-100">
      <MDBRow>
       {/*IMAGE*/}
        <MDBCol className="col-12 col-sm-12 col-lg-5">
         <MDBAnimation reveal type="fadeInLeft" duration="2s">
            <img  src={woman} style={{marginLeft: 0}}  className="img-fluid" alt="" />
             </MDBAnimation>
          </MDBCol>
                   {/*ABOUT*/}
                  <MDBCol style={{marginTop: 25}} className="col-12 col-sm-12 col-lg-5 text-center">
                   <MDBAnimation reveal type="fadeInRight" duration="2s">
        <h4><strong style={{marginBottom: 25}}>Hi, I'm Wonder Woman</strong></h4><p className="text-center">Im the beautifulfully talented woman every girl wants to be..</p>
         </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default About;
