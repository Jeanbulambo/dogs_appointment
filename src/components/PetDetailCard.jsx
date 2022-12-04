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
          <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Weight</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">10Kg</MDBCardText>
            </MDBCol>
            <hr />
          </MDBRow>
          <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Gender</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">Female</MDBCardText>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Age</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">4</MDBCardText>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Current Hotel</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">Banana</MDBCardText>
            </MDBCol>
          </MDBRow>
          <hr />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
