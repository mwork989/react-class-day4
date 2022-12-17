import {  NavLink } from 'react-router-dom';

const NavBar =()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">React Router Project</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink  className="nav-link" activeClassName='active' to="/Stocks/pharma">Stocks</NavLink>
            </li>
            <li className="nav-item">
            <NavLink  className="nav-link" activeClassName='active' to="/StocksF">Stocks functional component</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/About" activeClassName='active'>About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/Contact" activeClassName='active'>Contact</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/Contact/10001/dev/blr" activeClassName='active'>Contact1</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/Contact/10002/test/hyd" activeClassName='active'>Contact2</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/courses" activeClassName='active'>Courses</NavLink>
            </li>
          </ul>
        </div>
        </nav>
        
    )
}
export default NavBar



