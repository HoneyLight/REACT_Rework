import img1 from './images/banner1.webp';

function Banner(){
    return(
        <div className="banner">
            <h1>Welcome to my Banner</h1>
            <img src={img1} alt="" className='images'/>
        </div>
    )
}


export default Banner;