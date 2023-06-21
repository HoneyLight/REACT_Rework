// we are using "../" as a way of saying we should leave the pages folder and access the component folder to access the navigation and other pages we want in it.

import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Btn from "../components/Btn";
import food1 from "../components/images/food1.jpg";
import food3 from "../components/images/food3.jpg";
import food4 from "../components/images/food4.jpg";

function Home() {
    return (
        <div>
            <Navigation />
            <Banner />
            <div className="menu-page">
                <div className="header">
                    <h2>Our Menu</h2>
                </div>
                <div className="home-menu">
                    <div className="menus">
                        <div className="menu">
                            <img src={food1} alt="Menu" />
                            <h3>Arabian salad</h3>
                            <p>Combination of vegetables and nuts</p>
                            <h4>₦7400</h4>
                            <div className="menu-btns">
                                <Btn title="Order now" bgColor="#725656" />
                                <Btn title="Delete" bgColor="#ac0d0d" />
                            </div>
                        </div>
                        <div className="menu">
                            <img src={food3} alt="Menu" />
                            <h3>Burger Bread</h3>
                            <p>Yummy burger</p>
                            <h4>₦5000</h4>
                            <div className="menu-btns">
                                <Btn title="Order now" bgColor="#725656" />
                                <Btn title="Delete" bgColor="#ac0d0d" />
                            </div>
                        </div>
                        <div className="menu">
                            <img src={food4} alt="Menu" />
                            <h3>Chips & sausage</h3>
                            <p>Something to spice up your dinner</p>
                            <h4>₦1800</h4>
                            <div className="menu-btns">
                                <Btn title="Order now" bgColor="#725656" />
                                <Btn title="Delete" bgColor="#ac0d0d" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;