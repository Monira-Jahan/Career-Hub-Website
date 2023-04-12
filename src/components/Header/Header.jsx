import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
   
        <nav className="navbar navbar-expand-lg navbar-light pb-lg-4">
            <div className="container-fluid">
                <button class="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <h4 className="ps-4 ms-4">JobRecruiter</h4>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="/statistics">Statistics</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="/applyjobs">Applied Job</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="/blogs">Blogs</Link>
                        </li>
                    </ul>

                    <button class="btn btn-outline-success text-white my-2 " type="submit">Start Applying</button>

                </div>
            </div>
        </nav>
        

    );
};

export default Header;