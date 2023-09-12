import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
   const{title} = bookmark;
    return (
        <div className='bg-white mb-2 p-5 rounded-lg'>
            <h1 className=''>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.func
}

export default Bookmark;