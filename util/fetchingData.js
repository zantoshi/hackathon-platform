
export  const fetchingData   = async (endpoint) =>{
  try{
    const response = await fetch(endpoint,{
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    if(response.ok){
      const data = await response.json()
      return data
    }else{
      console.error("Error fetching data:", response.statusText);
    }
  }catch(error){
    console.error("Error fetching data:", error);
  }
}

export const updateGamertag  = async (endpoint) =>{
  try{
    const response = await fetch(endpoint,{
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    if(response.ok){
      const data = await response.json()
      return data
    }else{
      console.error("Error fetching data:", response.statusText);
    }
  }catch(error){
    console.error("Error fetching data:", error);
  }
}