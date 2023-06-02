import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import "./App.css";

// note that the file names you are creating must start with an uppercase.
// note that the name of the function have to start with a an uppercase.
// also note that when using a return keyword in react, there have to be a central parent tag holding every single thing in place eg a div. else if you write for eg just a h1 tag and a p tag, it will throw you errors hence you'll have to put them inside a parent tag like a div, main, header, section etc.
function App() {
  // let person = "Joshua Adams";
  return(
    <div>
      <Navigation/>
      <Banner/>
      <h1>Trying This</h1>
      <p>This is a paragraph</p>
      <div>
        {/* <h2>Hello {person}</h2> */}
      </div>
    </div>
  )
}


export default App;