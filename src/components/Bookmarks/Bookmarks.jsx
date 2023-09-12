import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-72 ml-12 bg-[#1111110C] rounded-lg mt-12 p-5">
            <h1 className='font-bold text-xl'>Bookmarks: {bookmarks.length}</h1>
            <br />
            {
                bookmarks.map(bookmark => <Bookmark 
                    key={bookmark.id}
                    bookmark={bookmark}
                     ></Bookmark>)
            }
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.func
}
export default Bookmarks;