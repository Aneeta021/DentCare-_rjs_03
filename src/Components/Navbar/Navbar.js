import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-md d-flex align-items-center justify-content-between px-4 ">
            {/* <div className="row"> */}
                {/* ------------ LOGO ------------ */}
                <div className="log ">
                   <a className="navbar-brand text-uppercase" href="#">dantacare</a>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="nav-items collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav me-3 mb-2 mb-lg-0">
                        <li className="nav-item px-3">
                            <Link className="nav-link active text-success" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/doctors">Doctors</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                             <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                       
                    </ul>
               </div>

               <div className="btn">
                 <button className="btn  rounded-pill bg-primary text-white" type="submit">Make an Appointment</button>
               </div>
            {/* </div> */}

        </div>
      </nav>
    </>
  );
};

export default Navbar;
