// import Navigation from "../components/Navigation";
// function Menu() {
//     return(
//         <div>
//             <Navigation/>
//             <h1>This is the Menu Page</h1>
//         </div>
//     )
// }

// export default Menu;

import Navigation from "../components/Navigation";
import Btn from "../components/Btn";
import img from "../components/images/flower1.avif"
import img2 from "../components/images/flower2.avif";
import img3 from "../components/images/flower3.avif";
import img4 from "../components/images/flower4.avif";
import { useState } from "react";

function Menu() {
  const [flowerArr, setFlowerArr] = useState( [
    {
      id: 1,
      title: "Moowy flower",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "#1, 500",
      flowerImg: img,
    },
    {
      id: 2,
      title: "Rose petals",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "#3, 500",
      flowerImg: img2,
    },
    {
      id: 3,
      title: "Cherry flower",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "#5, 500",
      flowerImg: img3,
    },

    {
      id: 4,
      title: "Hibiscus flower",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      price: "#2, 500",
      flowerImg: img4,
    },
  ]);

  const deleteBtn = (id) => {
    const filterMenu = flowerArr.filter((menu) => {
        return id !== menu.id;
    });
    console.log(filterMenu);
  }

//   or you do the below deleteBtn function if you dont want to use a 'retun'. remember you'll remove the curly brackets when using the arrow function. 

//   const deleteBtn = (id) => {
//     const filterMenu = flowerArr.filter((menu) => id !== menu.id);
//     setFlowerArr(filterMenu);
//   }

  {/* note that if you use the arrow function and then use curly brackets, you must call a return inside for it to display or work but if you don't use the curly brackets, yiu dont need to call a return */}

  return (
    <div className="menu-page">
      <Navigation />
      <div>
        <h1 className="header">This is Menu</h1>
      </div> 
      <div className="menus">
        {flowerArr.map((flower) => (
          <div className="menu" key={flower.id}>
            <img src={flower.flowerImg} alt="" />
            <h3>{flower.title}</h3>
            <p>{flower.description}</p>
            <h4>{flower.price}</h4>
            <Btn title= "Order now" bgColor="#725656"/>
            <Btn title= "Delete" bgColor="red" click={deleteBtn}/>
            {/* <button onClick={() => deleteBtn(flower.id)}> Delete</button> */}
          </div>
        ))}

      </div>
    </div>
  );
}
export default Menu;

// PROPS
// with PROPS you can move information from one component or folder to another. you can make a reusuable component dynamic by using props.