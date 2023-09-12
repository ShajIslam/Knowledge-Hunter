import PropTypes from 'prop-types';

const Time = ({markAsRead}) => {
    
    return (
        <div className='w-72 ml-12 bg-[#3C2FEC19] border-[#6047EC] rounded-lg mt-24 p-5'>
            <h1 className="font-bold text-lg">Spent time on read: {markAsRead}</h1>
            
        </div>
    );
};

Time.propTypes ={
    markAsRead: PropTypes.object.isRequired
}
export default Time;