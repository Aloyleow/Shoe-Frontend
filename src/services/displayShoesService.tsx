const displayShoes = async () => {

  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/display`, {

      method: "GET",
      headers: {"Content-Type": "application/json"},
      
    });

    const json = await res.json();
    
    if (json.error) {
      throw new Error(json.error);
    }

    return json as DisplayShoes;
   
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

export default displayShoes