import { useState } from "react"
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AddShoeForm from "../components/AddShoeForm";


const AddShoePage = () => {
  const [shoeData, setShoeData] = useState<UploadShoe>({
    name: "",
    typeid: 0,
    brandid: 0,
    sizeid: 0,
    colour: "",
    miscellaneous: "",
    costprice: 0,
    picture: false,
  })

  console.log(shoeData)

  return (
    <>
      <Container>
        <AddShoeForm setShoeData={setShoeData} shoeData={shoeData}/>
      </Container>
    </>
  )
}

export default AddShoePage
