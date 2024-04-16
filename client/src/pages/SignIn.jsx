import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Label, TextInput, Alert, Spinner } from 'flowbite-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading, error:errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  }; 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      return dispatch(signInFailure('Please fill up all the fields'));
    }
    try {
     dispatch(signInStart());
      const res = await fetch (`/api/auth/signin`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false){
        dispatch(signInFailure(data.message));
      }
      
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
    }catch(error){
      dispatch(signInFailure(error.message));
    }

  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'> 
      {/*left */}
        <div className='flex-1'>
        <img style={{ marginLeft:'30px', width: '300px', height: 'auto',justifyContent: 'center' }} src='/src/assets/img/logo.png' alt='Logo' />
      <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-200 rounded-lg text-white'>
              PendekarSiber
            </span>
            Portal
          </Link>
          <p className='text-sm mt-5 text-center'>
             Join now as adventure awaits for you to explore!  
          </p>
        </div>

        {/*right */}
      <div className='p-10 flex-1'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label value='Email'/>
              <TextInput 
                type='email'
                placeholder='name@email.com'
                id='email' onChange={handleChange} />
          </div>
          <div>
            <Label value='Password'/>
              <TextInput 
                type='password'
                placeholder='********'
                id='password' onChange={handleChange} />
          </div>
          <Button color='blue'type='submit' disabled={loading}>
          {
            loading ? (
              <>
               <Spinner size='sm'/>
                <span className='pl-3'>Loading...</span>
                </>
             
            ): (
             'Sign In'
          )}
          </Button>
          <OAuth/>
        </form>
        <div className='flex gap-2 text-sm mt-5 text-center'>
          <span>New user?</span>
          <Link to ='/sign-up' className='text-blue-500'>
            Register now
          </Link>
        </div>
        { 
        errorMessage && (
          <Alert className='mt-5' color='failure'>
            {errorMessage}
          </Alert>
        )}
      </div>
       
        
      <div className=''></div>
    
        </div>
      </div>
  );
}