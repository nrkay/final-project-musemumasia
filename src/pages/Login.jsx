import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false)
    const [datauser, setDatauser] = useState([]);

    const handelSubmit = (e) => {
        e.preventDefault();
        axios.get("https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/user").then((response) => {
            setDatauser(response.data)
            console.log(datauser)
        });

        for (let i = 0; i < datauser.length; i++) {
            if (userName === datauser[i].userName && password === datauser[i].Password) {
                setLogin(true)
            } 
        }
        if (login === true) {
            window.location = "/Home";
            console.log("berhasil")
        } else {
            console.log("gagal")
            window.location = "/Home";
        }
        // axios({
        //     method: 'get',
        //     url: 'https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/user',
        //   });
        // axios({
        //     method:  "GET",
        //     url: 'https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/user',
        //     timeout: 120000
        //   })
        //     .then((response)=> {
        //         let dataUser = response.data;
        //         console.log(dataUser.userName)
        //         let findUser = dataUser.find((element) => element.userName && element.Password === password)
        //         if(findUser){
        //             let parsedLS = JSON.stringify(findUser)
        //             localStorage.setItem('userName', parsedLS)
        //             window.location = '/faq'
        //             console.log("berhasil masuk")
        //         } else{
        //             alert("Username dan password anda salah")
        //             console.log("gagal masuk")
        //         }
        //     });
        //   for (let i = 0; i < datauser.length; i++) {
        //     if (userName === datauser[i].userName && password === datauser[i].Password) {
                // navigate('./Home')
        //         alert("Yeay, anda berhasil login")
        //     } else {
        //         alert("Username dan Password anda salah")
        //     }
        //   };  
    }



     
return (
<>
    <section>
        <div className="container">
                <div className="login row vh-100">
                    {/* login form */}
                    <div className="login-form col-lg-6  text-black">
                        <div className="row d-flex justify-content-center mt-5">
                            <div className="daftar-kiri col-8 wh-100 p-3">
                                {/* logo in form login */}
                                <div className="mt-3 p-3">
                                    <h1>Musemum Asia</h1>
                                </div>
                                <div className="login-body mt-3">
                                    <h2>LOGIN</h2>
                                    <form onSubmit={handelSubmit}>
                                        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" className="form-control mt-3" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Masukkan Username" />
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control mt-3" id="exampleInputPassword1" 
                                        placeholder="Masukkan Password"/>
                                        <div className="">
                                            <button className="button-daftar btn btn-dark mt-3 p-2">Masuk</button>
                                        </div>
                                    </form>
                                    <Link className="link-login" to="/register">Belum punya akun? Register di sini</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* picture in login */}
                    <div className="login-background col-sm-6 px-0 d-none d-md-block">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" className='w-100 vh-100' alt="" />
                    </div>
                </div>
        </div>    
    </section>
</> 
);
}

export default Login;