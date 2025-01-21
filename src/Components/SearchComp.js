import { Search } from 'lucide-react'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


export const SearchComp = ({handleQueryChange}) => {
  // state to manage the toast position
  const [toastPosition, setToastPosition] = useState("top-right");

  // using useEffect to handle the toast position based on the window width
  useEffect(() => {
    const handleResize = () => {
      setToastPosition(window.innerWidth < 768 ? "top-center" : "top-right");
    };

    window.addEventListener('resize', handleResize);
    
    // handling the position when the component is mounted 
    handleResize();

    // handling the position when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  },[]);


  // form to handle the search query change
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // checking the input value is empty
    if(e.target.query.value.trim() === ''){
      toast.error("Please enter a location to search", {position:toastPosition,style:{width:"250px",borderRadius:"10px"} ,closeButton:true, autoClose:3000});
      return;
    }

    // passing the query to the parent component
    handleQueryChange(e.target.query.value);
    // reset the input value
    e.target.query.value = '';
  }

  return (
    <section className='bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-2xl p-3 shadow-lg transition-all'>
        <div className='text-white flex items-center'>
            <Search className='h-5 w-5 text-white/80 ml-3'/>
            <form onSubmit={handleFormSubmit} className='flex-1'>
              <input className='w-full bg-transparent outline-none border-none placeholder:font-medium placeholder:text-white/60 px-4 py-1 ' placeholder='Search location...' type="text" name='query' />
            </form>
        </div>
    </section>
  )
};