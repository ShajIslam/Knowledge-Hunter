import PropTypes from 'prop-types';
import "../Blog/Blog.css"
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBookmarks , handleMarkAsRead}) => {
    const {cover, author_img, author, posted_date,reading_time, title,hashtags, id} = blog;
    return (
        <div className='my-16 ml-10'>
            <img className='w-full h-[450px] rounded' src={cover} alt="" />

            <div className='flex justify-between items-center my-5'>
            <div className='flex gap-2'>
            <img className='author-img' src={author_img} alt=""/>
            
            <div>
                <h1 className='font-bold text-[#111]'>{author}</h1>
                <p className='text-[#11111199]'>{posted_date}</p>
                </div>
            </div>
            <div className='flex gap-2'>
            <h1 className='text-[#11111199]'>{reading_time} min read</h1>
            <button onClick={()=> handleBookmarks(blog)}><FaBookmark></FaBookmark></button>
            </div>
            
            </div>
            <h1 className="text-3xl font-extrabold">{title}</h1>
            {
                hashtags.map((hash, idx) =><span key={idx} className='text-[#11111199]'><a href="">#{hash}</a></span>)
            }
            <br />
            <br />
            <button onClick={()=>handleMarkAsRead(reading_time, id)} className='underline bold text-red-800'>Mark As Read</button>           
        </div>
        
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;