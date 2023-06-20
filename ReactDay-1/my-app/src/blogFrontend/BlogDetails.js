import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogNav from "./BlogNav";
import { IoPricetagOutline, IoTimeOutline, IoChatbubbleOutline, IoThumbsUpOutline, IoThumbsDownOutline } from "react-icons/io5";


function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0)

    const increaseLike = () =>{
        setLike(like + 1)
    };
    const increaseDislike = () =>{
        setDislike(dislike + 1)
    };
    

    const getBlog = () => {
        fetch(`https://64903af71e6aa71680cad9bc.mockapi.io/Blog/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setBlog(data);
                console.log(data)
            });
    };

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <div>
            <BlogNav />
            <div className="header">
                <h2>{blog.title}</h2>
            </div>
            <div className="blog-card">
                <img src={blog.img} alt="Food" />
                <div className="blog-cat">
                    <IoPricetagOutline className="blog-cat-icon" />
                    <span>{blog.category}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-desc">{blog.desc}</p>
                <div className="blog-footer">
                    <p className="bf-date">
                        <IoTimeOutline className="blog-footer-icon" /> {blog.date}
                    </p>
                    <p>
                        <IoChatbubbleOutline className="blog-footer-icon" /> 0
                    </p>
                    <p>
                        <IoThumbsUpOutline className="blog-footer-icon" onClick={increaseLike} /> {like}
                    </p>
                    <p>
                        <IoThumbsDownOutline className="blog-footer-icon" onClick={increaseDislike}/> {dislike}
                    </p>
                    {/* <p>
                        <IoThumbsUpOutline className="blog-footer-icon" /> {blog.like}
                    </p>
                    <p>
                        <IoThumbsDownOutline className="blog-footer-icon" /> {blog.dislike}
                    </p> */}
                </div>
                </div>
        </div>
    )
}

export default BlogDetails;