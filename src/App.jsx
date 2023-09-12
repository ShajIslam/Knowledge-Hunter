import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks =  blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  

  return (
    <>     
     <Header></Header>
     <div className='md:flex mt-10'>
     <Blogs handleBookmarks = {handleBookmarks}></Blogs>
     <Bookmarks bookmarks ={bookmarks}></Bookmarks>

     </div>
     
         
    </>
  )
}

export default App
