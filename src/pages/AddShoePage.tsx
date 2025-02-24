import React, { useState } from "react"
import Container from "react-bootstrap/Container";
import AddShoeForm from "../components/AddShoeForm";


type AddShoePageProps = {
  loadDisplay: () => Promise<void>;
}

const AddShoePage: React.FC<AddShoePageProps> = ({ loadDisplay }) => {
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

  return (
    <>
      <Container>
        <AddShoeForm setShoeData={setShoeData} shoeData={shoeData} loadDisplay={loadDisplay}/>
      </Container>
    </>
  )
}

export default AddShoePage
