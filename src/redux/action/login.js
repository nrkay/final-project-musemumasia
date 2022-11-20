import axios from "axios";
export const GET_DATA ="GET_DATA"
export const INPUT_USER = "INPUT_USER"

function error() {
    alert('LOGIN GAGAL')
}

function succes() {
    alert('YEAY, Akunmu berhasil terdaftar. Silahkan Login kembali')
}

function register(data) {
    return{
        type : INPUT_USER,
        payload: data,
    }
}

export const inputUser = (userName, password) => {
    return async(dispatch) => {
        console.log("action dipanggil")
        axios.post('https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/user', {
        userName,
        password,
      })
      .then((dataUser) => { 
        dispatch(register(dataUser.data))
        succes();
      })
      .catch((error) => {
        error()
        console.log("error");
      });
    }
}
