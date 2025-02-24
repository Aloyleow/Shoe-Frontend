import React, { useEffect, useState } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"

type DisplayPageProps = {
  shoes: DisplayShoes;
};

const DisplayPage: React.FC<DisplayPageProps> = ({ shoes }) => {

  return (
    <>
      <Container>
        <Row>
          {shoes.map((obj) => (
            <Col xs={6} md={4} lg={3}>
              <div>
                <Image 
                  src={`${obj.picture === "none" ? "/steps-icon.svg" : obj.picture}`} 
                  fluid 
                  thumbnail 
                />
              </div>
              <div>
                <p>{obj.name}</p>
                <p>{obj.type}</p>
                <p>{obj.brand}</p>
                <p>${obj.costprice}</p>
                <p>{obj.miscellaneous}</p>
                <p>Size {obj.country}{obj.number}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default DisplayPage