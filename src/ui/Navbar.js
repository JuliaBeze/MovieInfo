import React from "react";

function Navbar() {
     return(
             <div >
                 <nav className="navbar navbar-dark bg-dark mb-5">
                     <div className = "container">
                         <div className = "navbar-header">
                             <a className="navbar-brand text-white text-lg brand-text" href="#">Books</a>
                         </div>
                         <ul className="navbar-nav ml-auto text-light d-inline-block">
                             <li className="nav-item d-inline-block mr-4">

                                 <img src="https://lh3.googleusercontent.com/proxy/lmfuCV5eN5dxBjXoAMQ5uiNPlA7XvVnAWjbKQCDnBKnRyLKeOZDNZIex7Gjr7x9PbXzC5WEpWFyNlK-WY5Ol8GKFvD6w5rT77GuV2ow0IUMB_JkX9Jb7Hg"
                                      width="120"/>
                             </li>
                         </ul>
                     </div>
                 </nav>
             </div>
    )


 }

 export default Navbar;