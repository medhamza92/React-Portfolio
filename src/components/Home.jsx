import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Home = () => {
  const emailAddress = 'mohamed.hamza@univ-constantine2.dz';
  const subject = 'Work Inquiry';
  const body = 'Hello, I would like to inquire about work opportunities.';

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div name='home' className='w-full h-screen bg-[#1e1b4b]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-400'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          HAMZA MOHAMED
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        As a full-stack developer with a passion for crafting outstanding digital experiences, I specialize in creating and occasionally 
        designing exceptional web app
        lications. My current focus is on developing responsive and feature-rich full-stack solutions
        </p>
        <div>
        <Link to="work" smooth={true} duration={500}>

          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-400 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
          <div >
        <ul className='w-full h-[80px] flex bg-[#1e1b4b] text-gray-300'>
          <li className='w-[60px] h-[60px] flex justify-between   duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/mohamed-hamza-aa2ba92a5/'
            >
               <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[60px] h-[60px] flex justify-between   duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/medhamza92'
            >
               <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[60px] h-[60px] flex justify-between  duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={mailtoLink}
            >
               <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[60px] h-[60px] flex justify-between  duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
               <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
