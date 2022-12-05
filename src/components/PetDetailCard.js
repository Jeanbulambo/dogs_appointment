import React from 'react';
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from 'mdb-react-ui-kit';

export default function PetDetailCard() {
  return (
    <MDBCol md="4">
      <MDBCard className="mb-4 mb-md-0">
        <MDBCardBody>
          <MDBCardText className="mb-4">
            <span className="text-primary font-italic me-1">Animal Name</span>
            Animal Type
          </MDBCardText>
          <hr />
          <MDBRow>
            <MDBCol sm="6">
              <MDBCardText>Current Hotel</MDBCardText>
            </MDBCol>
            <MDBCol sm="6">
              <MDBCardText className="text-muted">Banana</MDBCardText>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm="6">
              <MDBCardText>Check In</MDBCardText>
            </MDBCol>
            <MDBCol sm="6">
              <MDBCardText className="text-muted">
                <span>12/3/2022</span>
                <span> 9:30AM</span>
              </MDBCardText>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm="6">
              <MDBCardText>Checkout</MDBCardText>
            </MDBCol>
            <MDBCol sm="6">
              <MDBCardText className="text-muted">
                <span>12/3/2022</span>
                <span> 9:30AM</span>
              </MDBCardText>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm="6">
              <MDBCardText>Total price</MDBCardText>
            </MDBCol>
            <MDBCol sm="6">
              <MDBCardText className="text-muted">$1000</MDBCardText>
            </MDBCol>
          </MDBRow>
          <hr />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
