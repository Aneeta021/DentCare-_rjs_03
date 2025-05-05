import React from "react";

const Bottom = () => {
  return (
    <>
      <div>Bottom</div>
      <div className="container-fluid bg-dark px-5">
        <div className="container bg-dark">
          <div className="row d-flex px-5 mb-5 pt-5">
            <div className="col-lg-3 text-white">
              <h2 className="heading mb-4">DentaCare</h2>
              <p className="cont mb-3 ">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="social-icons text-white ">
                <a
                  href="#"
                  className="icon me-2  text-white bg-secondary rounded-5 p-2"
                >
                  link
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="icon me-2  text-white bg-secondary rounded-5 p-2"
                >
                  face
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="icon me-2  text-white bg-secondary rounded-5 p-2"
                >
                  insta
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 text-white ">
              <h2 className="heading mb-4">Quick Links</h2>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 text-white">
              <h2 className="heading mb-4">Recent Blog</h2>
              <div className="text p-2 ">
                <h3 className="heading">
                  <a href="#" className="nav-link fs-4">
                    Even the all-powerful Pointing has no control about
                  </a>
                </h3>
                <div className="meta d-flex gap-4">
                  <div>
                    <a href="#" className="nav-link">
                      <span className="icon-calendar"></span> Sept 15, 2018
                    </a>
                  </div>
                  <div>
                    <a href="#" className="nav-link">
                      <span className="icon-person"></span> Admin
                    </a>
                  </div>
                  <div>
                    <a href="#" className="nav-link">
                      <span className="icon-chat"></span> 19
                    </a>
                  </div>
                </div>
              </div>
              <div className="text p-2">
                <h3 className="heading">
                  <a href="#" className="nav-link fs-4 ">
                    Even the all-powerful Pointing has no control about
                  </a>
                </h3>
                <div className="meta d-flex gap-4">
                  <div>
                    <a href="#" className="nav-link">
                      <span className="icon-calendar"></span> Sept 15, 2018
                    </a>
                  </div>
                  <div>
                    <a href="#" className="nav-link">
                      <span className="icon-person"></span> Admin
                    </a>
                  </div>
                  <div>
                    <a href="#" className="nav-link">
                      <span className="icon-chat"></span> 19
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 text-white">
              <div className="ftco-footer-widget mb-4">
                <h2 className="heading mb-4">Office</h2>
                <div className="block-23 mb-3">
                  <ul className="navbar-nav">
                    <li className="nav-item"><span className="icon icon-map-marker"></span><span className="text text-white">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li className="nav-item"><a href="#" className="nav-link"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="row text-white">
          <div class="col-md-12 text-center">
            <p>
              Copyright © 2025 All rights reserved | This template is made with ❤ by <a href="#" target="_blank" className="text-decoration-none text-secondary">Colorlib</a>  
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
