import axios from "axios"

export const SUCCESS_GET_BENDA = "SUCCESS_GET_BENDA";
export const SUCCESS_ADD_BENDA = "SUCCESS_ADD_BENDA";

function successGetBenda(data) {
  // console.log(data)
  return {
    type: SUCCESS_GET_BENDA,
    payload: data
    
  } 
}

export const getBenda = () => {
  return async (dispatch) => {
    const result = await axios.get(
      "https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/negara"
    )
    // console.log(result.data)
    dispatch(successGetBenda(result.data))
  }
}


function successAddBenda(data) {
  return {
    type: SUCCESS_ADD_BENDA,
    payload: data,
  }
}

export const addBenda = ({ nama, negara, deskripsi, url, tanggal, gambar }) => {
  return async (dispatch) => {
    const result = await axios.post(
      "https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/negara",
      { description:"", provenience:negara,accession_credit_line:deskripsi, object_name:nama,  url:url, date_made:tanggal, img:gambar, emuIRN:"" }
    );
    console.log(result.data);
    dispatch(successAddBenda(result.data));
  };
};

