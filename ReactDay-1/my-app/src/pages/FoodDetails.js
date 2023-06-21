import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import Btn from "../components/Btn";


function FoodDetails() {
  const { category, id } = useParams();
  const [food, setFood] = useState({});

  // const getFood = () => {
  //   fetch(`https://free-food-menus-api-production.up.railway.app/our-foods/${id}`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setFood(data);
  //       console.log(data)
  //     });
  // };

  // the api we used dont have category in the products rather its different so we had to add category to the list

  const getFood = () => {
    fetch(`https://free-food-menus-api-production.up.railway.app/${category}/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setFood(data);
        console.log(data)
      });
  };

  useEffect(() => {
    getFood();
  }, []);

  const ratingStar = (num) => "⭐".repeat(num);

  return (
    <div>
      <Navigation />
      <div className="header">
        <h2>{food.name}</h2>
      </div>
      <div className="food-container">
        <img src={food.img} alt="Food" />
        <h2>{food.name}</h2>
        <p>{food.dsc}</p>
        <h3>₦{food.price}</h3>
        <h4>{food.country}</h4>
        <h5>
          {ratingStar(food.rate)} {food.rate}
        </h5>
        <Btn title="Order now" bgColor="green" color="white" />
      </div>
    </div>
  );
}

export default FoodDetails;
