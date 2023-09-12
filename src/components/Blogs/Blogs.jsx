import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarks, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


    return (
        <div className="w-2/3">
            <h1 className="text-3xl ml-10 font-bold">Blogs</h1>
            {
                blogs.map((blog, idx) => <Blog handleMarkAsRead={handleMarkAsRead} handleBookmarks ={handleBookmarks} key={idx} blog = {blog} ></Blog>)
            }

        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;