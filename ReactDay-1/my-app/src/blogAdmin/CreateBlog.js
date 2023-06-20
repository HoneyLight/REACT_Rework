import BlogSidebar from "./BlogSidebar";
import Btn from "../components/Btn";
import { useState } from "react";

function CreateBlog() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [err, setErr] = useState(false);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0)

    const increaseLike = () =>{
        setLike(like + 1)
    }
    const increaseDislike = () =>{
        setDislike(dislike + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === "" || category === "" || desc === "" || img === "") {
            setErr(true);
            return;
        }
        let blog = {
            title: title,
            category: category,
            desc: desc,
            img: img,
            date: new Date().toLocaleString(),
            like: like.toLocaleString(),
            dislike: dislike,
        };

        fetch("https://64903af71e6aa71680cad9bc.mockapi.io/Blog", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog),
        })
        .then((resp) => resp.json())
        .then((data) => {
            alert("Blog created successfully")
            console.log(data);
        })
        .catch((err) => console.log(err));
    }
    https://media.istockphoto.com/id/1147252758/photo/healthy-vegetarian-food-background-vegetables-pesto-and-lentil-curry-with-tofu.jpg?s=2048x2048&w=is&k=20&c=8zbnbstQR6nflAuEmk6OVnnROWRIrUTW4cGqDPQ3ce8=

    return (
        <div className="blog-admin">
            <BlogSidebar/>
            <div className="admin create-blog">
                <div className="header">
                    <h2>Create Blog</h2>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        {err && title === "" ? <span>Title Required</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select</option>
                            <option value="Hygiene">Hygiene</option>
                            <option value="Junk Food">Junk Food</option>
                            <option value="Vegetarian">Vegetarian</option>
                        </select>
                        {err && category === "" ? <span>Category Required</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                        {err && desc === "" ? <span>Description Required</span> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Image</label>
                        <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
                        {err && img === "" ? <span>Image Required</span> : null}
                    </div>
                    <Btn width="100%" bgColor="green" title="Submit" color="white"/>
                </form>
            </div>
        </div>
    )
}
export default CreateBlog;