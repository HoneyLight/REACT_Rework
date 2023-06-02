import './Navigation.css';

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
            <h1 className='logo'>Logo</h1>
            <ul>
                <li className='list'>Home</li>
                <li className='list'>About</li>
                <li className='list'>Contact</li>
                <li className='list'>Services</li>
            </ul>
        </header>
    )
}
export default Navigation;