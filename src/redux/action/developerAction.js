import axios from "axios"

export const SUCCESS_GET_DEV = "SUCCESS_GET_DEV";

function successGetDev(data) {
  return {
    type: SUCCESS_GET_DEV,
    payload:data
  }
}

export const getDev = () => {
  return async (dispatch) => {
    const result = await axios.get(
      "https://634aa22e5df9528514155265.mockapi.io/webDev/fe28/developer"
    )
    dispatch(successGetDev(result.data))
  }
}