import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import { UserContext } from "../userContext/userContext";
import { toast , ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const { setUser } = useContext(UserContext); // Assuming you want to use UserContext
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setEmailError('')
    setPasswordError('')

     // Check if the user has entered both fields correctly
     if ('' === email) {
      setEmailError('Please enter your email')
      toast.error('Please enter your email',{
         
        className: "toast-message"
      });
      return
    }
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      toast.error('Please enter your email',{
         
        className: "toast-message"
      });
      return
    }
  
    if ('' === password) {
      setPasswordError('Please enter a password')
      toast.error('Please enter a password',{
         
        className: "toast-message"
      });
      return
    }
  
    
      // Authentication calls will be made here...

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      localStorage.setItem('accessToken', data.token);

      // Assuming your response contains user data
      

      console.log(data);

      if (data) {
        handleOpen();
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      } else {
        console.log("You are not an admin");
        toast.error('check your crendientials',{
         
          className: "toast-message"
        });
      }
    } catch (err) {
      console.log(err.message);
      toast.error('check your crendientials',{
         
        className: "toast-message"
      });
    }
  };

  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">Vacay</h1>

            <p className="text-white mt-1">The most popular space for renting </p>
          </div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleLogin}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Admin!</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className="pl-2 outline-none border-none"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <input
                className="pl-2 outline-none border-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </div>
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password?</span>
          </form>
        </div>
      </div>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className="w-full h-full flex items-center justify-center">
          <div className="sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[40vh] flex flex-col items-center gap-2 p-6 bg-[#FFFFEB] rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#059669] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-2xl font-medium">Login Successful</span>
            <p className="text-center">You will be redirected to your dashboard shortly.</p>
          </div>
        </div>
      </Modal>
      <ToastContainer/>
    </>
  );
};

export default LoginForm;