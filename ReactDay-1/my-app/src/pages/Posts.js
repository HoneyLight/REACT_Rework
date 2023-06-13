// useEffect is also a react hook. always note that all react hooks comes with the 'use' key word eg usestate, usenavigate etc. 
// UseEffect is saying wait untill you reach this particular component before it runs meaning if a page is open, this things in the useeffect wont run untill you get to th page or component where it is before it will run. remember that react loads everything on your pages once the site is opened so useeffect kind of help to limit some things untill the user reaches that particular page before it runs.
// useEffect does 3 stuff all together in one :- componentDidMount, componentDidUpdate and componentDidUnmount.

import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";

function Posts() {
    const [num, setNum] = useState(0);
    const [person, setPerson] = useState("James");

    useEffect(() => {
        console.log("You have entered the post page");
// this console is mounting the page while the array in the return call below is telling the function to run only once hence updating it cos without the array, the function will be running. then the return function is unmounting the page
        return () => console.log("You have left the post page");
    }, [person, num]);

    return(
        <div>
            <Navigation/>
            <div className="header">
                <h2>Posts</h2>
            </div>
            <div className="posts">
                <h2>{num}</h2>
                <h2>{person}</h2>
                <button onClick={() => setNum(num + 1)}>Increase</button>
                <button onClick={() => setPerson("Peace")}>Change Name</button>
            </div>
        </div>
    )
}

export default Posts;