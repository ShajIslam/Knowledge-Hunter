import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:1/3">
            <h1>Bookmarks: {bookmarks.length}</h1>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.func
}
export default Bookmarks;