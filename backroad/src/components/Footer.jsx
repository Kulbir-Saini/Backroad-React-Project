import { navBar } from "../data";
import { navIcons } from "../data";
function Footer() {

    return(
        <>
            <footer className="section footer">
                <ul className="footer-links">
                    {navBar.map((data)=>{
                        const {id, link, string} = data;
                        return(
                            <li key={id}>
                                <a href={link} className= "footer-link">{string}</a>
                            </li>
                        )
                    })}
                </ul>

                <ul className="footer-icons">
                  {navIcons.map((data)=>{
                    const {id, iconLink, iClass, iconTarget} = data;
                    return(
                        <li key={id}>
                            <a href={iconLink} className="footer-icon" target={iconTarget}>
                                <i>{iClass}</i>
                            </a>
                        </li>
                    )
                  })}
                </ul>
                <p className="copyright">
                    copyright &copy; Backroads travel tour company
                    <span id="date">{new Date().getFullYear()}</span> all rights reserved
                </p>
            </footer>            
        </>
    );
}

export default Footer;