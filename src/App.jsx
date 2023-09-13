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
  
  //console.log(bookmarks);

  const handleMarkAsRead = (time, id)=>{

    const newTime = markAsRead + time;
    setMarkAsRead(newTime);

    const newData = bookmarks.filter(bookmark => bookmark.id != id );
    setBookmarks(newData)
  }

  return (
    <>     
     <Header></Header>
     <div className='md:flex mt-10'>
     <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmarks = {handleBookmarks}></Blogs>
     <div className='sticky'>
     <Time markAsRead ={markAsRead}></Time>
     <Bookmarks  bookmarks ={bookmarks}></Bookmarks>
     </div>
     

     </div>
     
         
    </>
  )
}

export default App
