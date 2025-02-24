import React from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

type DisplayPageProps = {
  shoes: DisplayShoes;
};

const DisplayPage: React.FC<DisplayPageProps> = ({ shoes }) => {
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <Row>
          {shoes.map((obj, index) => (
            <Col xs={6} md={4} lg={3} key={index} onClick={() => navigate(`/shoe/${obj.shoesid}`)}>
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