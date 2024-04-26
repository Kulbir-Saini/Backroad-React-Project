import { navBar } from '../data';
import { navIcons } from '../data';
import logo from'../images/logo.svg';
function Navbar() {
    return(
        <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="backroads" />
                        <button type="button" className="nav-toggle" id="nav-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <ul className="nav-links" id="nav-links">
                       {navBar.map((data)=>{
                        const {id, link, string} = data;
                        return(
                            <li key={id}>
                                <a href={link} className= "nav-link">{string}</a>
                            </li>
                        )
                       })}
                    </ul>

                    <ul className="nav-icons">
                       {navIcons.map((data)=>{
                        const {id, iconLink, iClass, iconTarget} = data;
                        return(
                            <li key={id}>
                                <a href={iconLink} className='nav-icon' target={iconTarget} rel='noreferrer' >
                                     <i >{iClass}</i>
                                </a>    
                            </li>
                        )
                       })}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

