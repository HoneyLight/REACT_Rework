// we are using "../" as a way of saying we should leave the pages folder and access the component folder to access the navigation and other pages we want in it.

import Navigation from "../components/Navigation";
import Banner from "../components/Banner";

function Home() {
    return(
        <div>
            <Navigation/>
            <Banner/>
            <h1>This is the Home Page</h1>
        </div>
    )
}

export default Home;