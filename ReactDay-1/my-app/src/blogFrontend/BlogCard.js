import { IoPricetagOutline, IoTimeOutline, IoChatbubbleOutline, IoThumbsUpOutline, IoThumbsDownOutline } from "react-icons/io5";
import img from "../components/images/food2.jpg"
// import { MdLoyalty } from "react-icons/md";

function BlogCard() {
    return (
        <div className="blogCard-container">
            <div className="blog-card">
                <img src={img} alt="Food" />
                <div className="blog-cat">
                    <IoPricetagOutline className="blog-cat-icon" />
                    <span>Food</span>
                </div>
                <h3 className="blog-title">Delicious Delicacies</h3>
                <p className="blog-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam veritatis assumenda ut. Molestias incidunt debitis sit ullam nesciunt soluta odit reiciendis. Aut, reiciendis vero iusto maiores mollitia quod deserunt repudiandae.</p>
                <div className="blog-footer">
                    <p className="bf-date">
                        <IoTimeOutline className="blog-footer-icon" /> June 19, 2023
                    </p>
                    <p>
                        <IoChatbubbleOutline className="blog-footer-icon" /> 0
                    </p>
                    <p>
                        <IoThumbsUpOutline className="blog-footer-icon" /> 0
                    </p>
                    <p>
                        <IoThumbsDownOutline className="blog-footer-icon" /> 0
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;