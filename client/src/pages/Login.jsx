import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link , useNavigate} from 'react-router-dom'
import { loginStart , loginSuccess , loginError } from '../redux/user/userSlice.js'
import OAuth from '../components/OAuth.jsx'

const Login = () => {
  const [formData , setFormData] = useState({})
  const {loading , error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(loginStart());
      const res = await fetch("/api/auth/login" , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success===false){
      dispatch(loginError(data.message));
      return;
    }
    dispatch(loginSuccess(data));
    navigate('/')
    } catch (error) {
      dispatch(loginError(error.message))
    }
  }
  return (
    <div className='flex flex-col gap-4 items-center mt-20 sm:mt-32 text-sm sm:text-lg'>
      <h1 className='text-3xl text-center font-semibold font-head'>Login</h1>
      <form onSubmit={handleSubmit} className='w-64 sm:w-96 flex flex-col gap-3'>
        <input type='email' placeholder='Email' id='email' onChange={handleChange} className='border-2 border-gray-300 p-3 mt-4 rounded-lg '/>
        <input type='password' placeholder='Password' id='password' onChange={handleChange} className='border-2 border-gray-300 p-3 mt-4 rounded-lg '/>
        <button type='submit' disabled={loading} className='disabled:opacity-80 bg-black text-white font-semibold p-2 rounded-lg  mt-4 hover:bg-white hover:text-black transition-all delay-150 ease-in border-2 border-transparent hover:border-black '>
          {loading? 'Logging...' : 'Login'}
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-1'>
        <p>New to Gruham? </p>
          <Link to="/signup"> 
          <span className='text-blue-600'>
              Signup
          </span></Link>
      </div>
      {error && <p className='text-red-500'>Error : {error}</p>}
     </div>
  )
}

export default Login
