const displayShoeTypes = async () => {

  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/shoetype`, {

      method: "GET",
      headers: {"Content-Type": "application/json"},
      
    });

    const json = await res.json();
    
    if (json.error) {
      throw new Error(json.error);
    }

    return json as DisplayShoeType;
   
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

type ShoeTypeData = {
  typename: string
}

const addShoeTypes = async (data: ShoeTypeData) => {

  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/shoetype`, {

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


const editShoeTypes = async (data: EidtShoeType) => {

  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/shoetype`, {

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
  displayShoeTypes,
  addShoeTypes,
  editShoeTypes
} 