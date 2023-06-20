import './Navigation.css';
import { Link } from "react-router-dom";

function Navigation() {

    // const lists = {
    //     padding: "10px",
    //     backgroundColor: "blue",
    //     color: "white",
    //     margin: "10px",
    //     listStyle: 'none'
    // }
// we are using 'className' as our class cos 'class' is taken in javascript.
    return(
        <header className='navigation'>
            {/* <h1 style={{fontSize: "", color: "red"}}>logo</h1> */}
            {/* <ul>
                <li style={lists}>Home</li>
                <li style={lists}>About</li>
                <li style={lists}>Contact</li>
                <li style={lists}>Services</li>
            </ul> */}
            <h1 className='logo'>
                <Link to="/" className='nav-link'>Logo</Link>
            </h1>
            <ul>
                <li className='list'>
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className='list'>
                    <Link to="/about" className='nav-link'>About</Link>
                </li>
                <li className='list'>
                    <Link to="/menu" className='nav-link'>Menu</Link>
                </li>
                <li className='list'>
                    <Link to="/flowermenu" className='nav-link'>Flower Menu</Link>
                </li>
                <li className='list'>
                    <Link to="/contact" className='nav-link'>Contact</Link>
                </li>
                <li className='list'>
                    <Link to="/counter" className='nav-link'>Counter</Link>
                </li>
                <li className='list'>
                    <Link to="/classcomp" className='nav-link'>Class Component</Link>
                </li>
                <li className='list'>
                    <Link to="/posts" className='nav-link'>Posts</Link>
                </li>
                <li className='list'>
                    <Link to="/fooddetails" className='nav-link'>Food Details</Link>
                </li>
                <li className="list">
                    <Link to="/blog" className="nav-link">
                    Blog
                    </Link>
                </li>
            </ul>
        </header>
    )
}
export default Navigation;