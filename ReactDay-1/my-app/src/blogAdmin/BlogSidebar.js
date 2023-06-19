import { Link } from "react-router-dom";

function BlogSide() {
    return(
        <div>
            <ul className="blogsidebar">
                <Link to="/admin" className="blog-links">Dashboard</Link>
                <Link to="/create-blog" className="blog-links">Create Blog</Link>
            </ul>
        </div>
    )
}

export default BlogSide;