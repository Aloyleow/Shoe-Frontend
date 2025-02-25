import React from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import DeleteShoe from "../components/DeleteShoe";
import EditShoeForm from "../components/EditShoeForm";

type SingleShoePageProps = {
  shoes: DisplayShoes;
  loadDisplay: () => Promise<void>;
}

const SingleShoePage: React.FC<SingleShoePageProps> = ({ shoes, loadDisplay }) => {
  const { shoesid } = useParams()

  const filterParams = shoes.filter(shoe => (
    (shoesid === shoe.shoesid.toString())
  ))

  return (
    <>
      <Container>
        {filterParams.map((obj, index) => (
          <Row key={index}>
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
              <DeleteShoe singleShoe={obj.shoesid} loadDisplay={loadDisplay} />
            </Col>
            <EditShoeForm obj={obj} loadDisplay={loadDisplay}/>
          </Row>
        ))}
      </Container>
    </>
  )
}

export default SingleShoePage