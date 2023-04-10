import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='container' >
            {/* navbar Section */}
            <nav className="navbar navbar-expand-lg navbar-light ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="">Job Recruiter</a>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="/statistics">Statistics</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Applied Job</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Blogs</a>
                        </li>
                    </ul>

                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

                </div>
            </nav>
           
        </div>
    );
};

export default Header;