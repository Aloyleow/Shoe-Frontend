import React from 'react';
import Form from 'react-bootstrap/Form';


type SsizeSelectProps = {
  setShoeData: React.Dispatch<React.SetStateAction<UploadShoe>>;
  shoeData: UploadShoe;
}

const SsizeSelect: React.FC<SsizeSelectProps> = ({ setShoeData, shoeData }) => {

  return (
    <Form.Group className="mb-3">
      <Form.Label>Size</Form.Label>
      <Form.Control type="text" />
      <Form.Text className="text-muted">
        Eg. UK 8
      </Form.Text>
    </Form.Group>
  )
}

export default SsizeSelect