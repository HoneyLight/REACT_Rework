// import img from "../components/img/food.avif";
// import img2 from "../components/img/food 2.avif";
// import img3 from "../components/img/food 3.avif";
// import img4 from "../components/img/chicken peppersoup.avif";
import { useEffect, useState } from "react";
import Btn from "../components/Btn";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

function Menu() {


    const [foodArr, setFoodArr] = useState([]);
    const foodCatArr = [
        "bbqs",
        "best-foods",
        "breads",
        "burgers",
        "chocolates",
        "desert",
        "fried-chicken",
        "ice-cream",
        "pizzas",
        "porks",
        "sandwitches",
        "sausage",
        "steaks",
    ];

    const getMenu = () => {
        fetch("https://free-food-menus-api-production.up.railway.app/best-foods")
            .then((resp) => resp.json())
            .then((data) => {
                setFoodArr(data);
            });
    };

    // const getCategory = (cat) => {
    //     fetch(`https://free-food-menus-api-production.up.railway.app/${cat}`)
    //         .then((resp) => resp.json())
    //         .then((category) => {
    //             setFoodArr(category);
    //             console.log(category);
    //         });
    // };

    // const catig = (value) =>{
    //   fetch("https://free-food-menus-api-production.up.railway.app/best-foods")
    //   .then((resp) => resp.json())
    //   .then((links) => 
    //   )
    // }
    
    // useEffect(() => {
    //     getMenu();
    // }, []);

    const getCategory = (cat) => {
        fetch(`https://free-food-menus-api-production.up.railway.app/${cat}`)
            .then((resp) => resp.json())
            .then((category) => {
                const foodArr = category.map((food) => {
                    return { ...food, category: cat };
                });
                setFoodArr(foodArr);
            });
    };

    useEffect(() => {
        getCategory("best-foods");
    }, []);


    const deleteBtn = (id) => {
        const del = foodArr.filter((food) => food.id !== id);
        setFoodArr(del);
        console.log(foodArr.id);
    }

    return (
        <div className="menu-page">
            <Navigation />
            <div>
                <h1 className="header">This is Menu</h1>
            </div>

            <div className="display">

                <div className="menu-container">
                    <div className="menu-tabs">
                        {foodCatArr.map((category, i) => {
                            return (
                                <button key={i} onClick={() => getCategory(category)}>
                                    {category}
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className="menus">
                    {foodArr.map((food, i) => (
                        <Link to={`/menu/${food.id}`} className="menu" key={i}>
                            <img src={food.img} alt="" />
                            <h3>{food.name}</h3>
                            <p>{food.dsc}</p>
                            <h4>{food.price}</h4>
                            <Btn
                                bgColor="#fb4d3b"
                                title="Order"
                                border="2px solid #fb4d3b"
                                padding="15px 20px"
                                color="white"
                            />
                            <Btn
                                bgColor="white"
                                title="Delete"
                                color="red"
                                border="2px solid #fb4d3b"
                                padding="15px 20px"
                                click={() => deleteBtn(food.id)}
                            />
                            {/* <button>Order NOw</button> */}
                            {/* <button onClick={() => deleteBtn(food.id)}> Delete</button> */}
                        </Link>
                    ))}

                    {/*  */}
                </div>
            </div>
        </div>
    );
};

export default Menu;
