import React from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import EditType from "../components/EditType";
import EditBrand from "../components/EditBrand";
import EditSize from "../components/EditSize";

const CustomizePage = () => {

  return (
    <Container>
      <EditType/>
      <EditBrand/>
      <EditSize/>
    </Container>
  )
}

export default CustomizePage