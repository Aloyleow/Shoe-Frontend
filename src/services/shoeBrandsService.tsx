const displayShoeBrands = async () => {

  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/shoebrand`, {

      method: "GET",
      headers: {"Content-Type": "application/json"},
      
    });

    const json = await res.json();
    
    if (json.error) {
      throw new Error(json.error);
    }

    return json as DisplayShoeBrand;
   
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

type ShoeBrandData = {
  brandname: string
}

const addShoeBrand = async (data: ShoeBrandData) => {

  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/shoebrand`, {

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

const editShoeBrands = async (data: EidtShoeBrand) => {

  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/shoebrand`, {

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
  displayShoeBrands,
  addShoeBrand,
  editShoeBrands 
} 