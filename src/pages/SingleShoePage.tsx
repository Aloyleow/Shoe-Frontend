import React, { useEffect, useState } from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import DeleteShoe from "../components/DeleteShoe";

type SingleShoePageProps = {
  shoes: DisplayShoes;
  loadDisplay: () => Promise<void>;
}

const SingleShoePage: React.FC<SingleShoePageProps> = ({ shoes, loadDisplay }) => {
  const { shoesid } = useParams()
  const [singleShoe, setSingleShoe] = useState<DisplaySingle>()

  useEffect(() => {
    
    for (const obj of shoes) {
      if (shoesid === obj.shoesid.toString()){
        setSingleShoe(obj)
        break
      }
    }

  },[])
  
  return (
    <>
      <Container>
        <Row>      
            <Col xs={12} md={6}>
              <div>
                <Image 
                  src={`${singleShoe?.picture === "none" ? "/steps-icon.svg" : singleShoe?.picture}`} 
                  fluid 
                  thumbnail 
                />
              </div>
              <div>
                <p>{singleShoe?.name}</p>
                <p>{singleShoe?.type}</p>
                <p>{singleShoe?.brand}</p>
                <p>${singleShoe?.costprice}</p>
                <p>{singleShoe?.miscellaneous}</p>
                <p>Size {singleShoe?.country}{singleShoe?.number}</p>
              </div>
              <DeleteShoe singleShoe={singleShoe} loadDisplay={loadDisplay}/>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default SingleShoePage