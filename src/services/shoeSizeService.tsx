const displayShoeSizes = async () => {

  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/shoesize`, {

      method: "GET",
      headers: {"Content-Type": "application/json"},
      
    });

    const json = await res.json();
    
    if (json.error) {
      throw new Error(json.error);
    }

    return json as DisplayShoeSize;
   
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

type ShoeSizeData = {
  sizecountry: string;
  sizenumber: number;
}

const addShoeSize = async (data: ShoeSizeData) => {

  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/shoesize`, {

      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
      
    });

    const json = await res.json();
    
    if (json.error) {
      throw new Error(json.error);
    }

    return json;
   
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

const editShoeSizes = async (data: EidtShoeSize) => {

  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/shoesize`, {

      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
      
    });

    const json = await res.json();
    
    if (json.error) {
      throw new Error(json.error);
    }

    return json;
   
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

export {
  displayShoeSizes,
  addShoeSize,
  editShoeSizes
} 