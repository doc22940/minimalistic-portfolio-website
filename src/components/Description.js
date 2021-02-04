import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";

function Description (){
	return(
  <MDBContainer id="description" style={{width:"100vw", marginTop: "10vh"}} className="col-11 text-center">
      <MDBRow>
      <MDBAnimation reveal type="fadeInLeft">
        <MDBCol >
        <h3>My Services</h3>
        <p>I fight crime.  I kick ass and take names.  Im a fighter not a lover</p></MDBCol>
        </MDBAnimation>
      </MDBRow>
    </MDBContainer>


	)
}
export default Description;
