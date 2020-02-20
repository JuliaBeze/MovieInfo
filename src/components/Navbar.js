import React from "react";

function Navbar() {
     return(
             <div >
                 <nav className="navbar navbar-dark bg-dark mb-5">
                     <div className = "container">
                         <div className = "navbar-header">
                             <a className="navbar-brand text-white text-lg brand-text" href="#">MovieInfo</a>
                         </div>
                         <ul className="navbar-nav ml-auto text-light d-inline-block">
                             <li className="nav-item d-inline-block mr-4">

                                 <img src="https://img-fotki.yandex.ru/get/4526/200418627.f8/0_152b90_c28581d1_orig.png"
                                      width="120"/>
                             </li>
                         </ul>
                     </div>
                 </nav>
             </div>
    )


 }

 export default Navbar;