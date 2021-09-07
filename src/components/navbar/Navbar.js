import React, { Component } from 'react'
import Brightness4Icon from '@material-ui/icons/Brightness4';
import PublicIcon from '@material-ui/icons/Public';
import SearchIcon from '@material-ui/icons/Search';
import './Navbar.css'

export class Navbar extends Component {


    render() {
        return (
            <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="/">W3School</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Tutorial</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">References</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Exercises</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Vedios</a>
                    </li>
                    </ul>
                    <form className="d-flex">
                    <button className="btn btn-outline-success" type="submit" ><Brightness4Icon/></button>
                    </form>
                    <form className="d-flex">
                    <button className="btn btn-outline-success" type="submit" ><PublicIcon/></button>
                    </form>
                    <form className="d-flex">
                    <button className="btn btn-outline-success" type="submit" ><SearchIcon/></button>
                    </form>
                    <form>
                    <li className="d-flex">
                    <a className="nav-link active" aria-current="page" href="/">Sources</a>
                    </li>
                    </form>
                    <form>
                    <li className="d-flex">
                    <a className="nav-link active" aria-current="page" href="/">Paid Courses</a>
                    </li>
                    </form>
                    <form className="d-flex">
                    <button className="btn btn-outline-success" type="submit" >Login</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar
