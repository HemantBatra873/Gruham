import { useEffect, useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link , useNavigate} from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.user);
  const [searchTerm , setSearchTerm] = useState('');
  const handleSubmit =(e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm' , searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  }
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const URLSearchTerm = urlParams.get('searchTerm');
    if(URLSearchTerm) setSearchTerm(URLSearchTerm);
  } , [location.search]); 

  return (
    <header>
      <div className="flex justify-between items-center mx-auto p-1 md:p-4 max-w-7xl">
        <Link to='/'>
          <h1 className='font-head text-2xl sm:text-3xl lg:text-5xl flex flex-wrap font-semibold'>Gruham</h1>
        </Link>
      <form onSubmit={handleSubmit} className='flex justify-evenly items-center'>
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' placeholder='Search...' className='border-2 border-gray-300 p-2 rounded-lg w-24 sm:w-64 h-10 sm:h-12'/>
        <button><FaSearch className='h-7 w-7 text-gray-300 m-2 hover:text-black transition-all ease-in '/></button> 
      </form>
      <ul className='flex justify-center sm:gap-8 items-center mr-8 text-xl'>
        <Link to='/'><li className='hidden sm:inline'>Home</li></Link>
        <Link to='/about'><li className='hidden sm:inline'>About</li></Link>
        {user? (<Link to='/profile'><img className='rounded-full object-cover w-9 h-9 sm:h-11 sm:w-11' src={user.avatar} alt='profile'></img></Link>)
        :(<Link to='/login'><li>Login</li></Link>)}
      </ul>
      </div>
    </header>
  )
}

export default Header
