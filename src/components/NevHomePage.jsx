import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from '../pages/Home';
function NavHomePage() {
    const navigate = useNavigate();
    const moveLogin = () => {
        navigate('./login')
    }
return (
<>
<nav class="navbar bg-transparent">
  <div class="container d-inline-flex">
    <div className="">
    <a class="navbar-brand" href="#">
      <img src="https://raw.githubusercontent.com/Shafira-van/latihan/main/museumAsia/logo.png" alt="MesumAsia" width="30" height="24" />
    </a>
    </div>
    <div className="">
        <button onClick={moveLogin} type="button" class="btn btn-dark btn-homepage">Login</button>
    </div>
  </div>
</nav>
</>
);
}

export default NavHomePage;