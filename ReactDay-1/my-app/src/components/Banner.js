// import img1 from './images/banner1.webp';
import Btn from './Btn';

function Banner() {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Welcome to my Banner</h1>
                <p>The home of beautiful flowers</p>
                {/* <img src={img1} alt="" className='images'/> */}
                <div className="banner-btns">
                    <Btn title= "Order now" bgColor="none" color="white" border="2px solid white" />
                    <Btn title= "View more" bgColor="white" color="black" />
                    {/* <button className='banner-btn1'>Order now</button>
                    <button className='banner-btn2'>View more</button> */}
                </div>
            </div>
        </div>
    )
}


export default Banner;