import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux'
import { inputUser } from '../redux/action/login';
import { Link } from 'react-router-dom';
function Register() {
    const state = useSelector(state => state.user)
    const dispatch = useDispatch();
    console.log(state);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
        if (userName==null || userName==""){  
            alert('Username tidak boleh kosong')
            return false;  
          }else if(password.length<6){  
            alert("Password minimal 6 karakter");  
            return false;  
            }

        dispatch(inputUser(userName, password));
       
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
                                    <h2>Daftar</h2>
                                    <form onSubmit={handelSubmit}>
                                        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" className="form-control mt-3" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Masukkan Username" />
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control mt-3" id="exampleInputPassword1"
                                        placeholder="Masukkan Password" />
                                        <div className="">
                                            <button className="button-daftar btn btn-dark mt-3 p-2">Daftar</button>
                                        </div>
                                    </form>
                                    <Link className="link-login" to="/login">Sudah punya akun? Login di sini</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* picture in login */}
                    <div className="login-background col-sm-6 px-0 d-none d-md-block bg-warning">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" className='w-100 vh-100' alt="" />
                    </div>
                </div>
        </div>    
    </section>
</> 
);
}

export default Register;