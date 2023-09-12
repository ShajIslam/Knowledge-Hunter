import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
import Time from './components/ReadingTime/Time'
function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);


  const handleBookmarks =  blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  

  const handleMarkAsRead = time=>{
    const newTime = markAsRead + time;
    setMarkAsRead(newTime);
  }

  return (
    <>     
     <Header></Header>
     <div className='md:flex mt-10'>
     <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmarks = {handleBookmarks}></Blogs>
     <div>
     <Time markAsRead ={markAsRead}></Time>
     <Bookmarks  bookmarks ={bookmarks}></Bookmarks>
     </div>
     

     </div>
     
         
    </>
  )
}

export default App
