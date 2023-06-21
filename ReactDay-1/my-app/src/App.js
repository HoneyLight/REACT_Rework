// import Navigation from "./components/Navigation";
// import Banner from "./components/Banner";
// import "./App.css";

// note that the file names you are creating must start with an uppercase.
// note that the name of the function have to start with a an uppercase.
// also note that when using a return keyword in react, there have to be a central parent tag holding every single thing in place eg a div. else if you write for eg just a h1 tag and a p tag, it will throw you errors hence you'll have to put them inside a parent tag like a div, main, header, section etc.
// function App() {
//   // let person = "Joshua Adams";
//   return(
//     <div>
//       <Navigation/>
//       <Banner/>
//       <h1>Trying This</h1>
//       <p>This is a paragraph</p>
//       <div>
//         {/* <h2>Hello {person}</h2> */}
//       </div>
//     </div>
//   )
// }


// export default App;


// class 3 - React ROuter class
// learning to navigate multiple pages through one single page application

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Counter from "./pages/Counter";
import ClassComp from "./pages/ClassComp";
import UserDetails from "./pages/UserDetails";
import Posts from "./pages/Posts";
import FlowerMenu from "./pages/FlowerMenu";
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";
import FoodProvider from "./contexts/FoodContext";



function App() {
  return (
    <FoodProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/classcomp" element={<ClassComp />} />
          <Route path="/user_details" element={<UserDetails />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/flowermenu" element={<FlowerMenu />} />
          <Route path="/menu/:category/:id" element={<FoodDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </FoodProvider>
  )
}

export default App;