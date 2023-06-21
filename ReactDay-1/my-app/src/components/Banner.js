// import img1 from './images/banner1.webp';
import Btn from './Btn';
import { FoodContext } from "../contexts/FoodContext";
import { useContext } from 'react';

function Banner() {

    const props = useContext(FoodContext);
    const cart = props.cart;
    const setCart = props.setCart;

    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Welcome to Chop & Grill</h1>
                <p>The hub of Delicious Delicacies</p>
                {/* <img src={img1} alt="" className='images'/> */}
                <div className="banner-btns">
                    <Btn title= "Order now" bgColor="none" color="white" border="2px solid white" />
                    <Btn title= "View more" bgColor="white" color="black" />
                    {/* <button className='banner-btn1'>Order now</button>
                    <button className='banner-btn2'>View more</button> */}
                    <button onClick={() => setCart(cart + 1)} style={{color: "white"}}>increase cart practice</button>
                </div>
            </div>
        </div>
    )
}


export default Banner;