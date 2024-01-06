import React, { useState } from 'react';
import photo1 from '../assets/blogs/photo1.jpg';
import photo2 from '../assets/blogs/photo2.jpg';
import photo3 from '../assets/blogs/photo3.jpg';

const Blogs = () => {
  
  const [blogData] = useState([
    {
      title: "Exploring the Power of React Hooks",
      content: "In this blog post, we'll dive into the world of React Hooks and explore how they can enhance the development experience.",
      author: "Jane Developer",
      date: "Jan 10, 2024",
      image: photo1,
    },
    {
      title: "Building a RESTful API with Express and MongoDB",
      content: "Learn how to create a RESTful API using Express.js and MongoDB. We'll cover routing, middleware, and database integration.",
      author: "John Coder",
      date: "Jan 15, 2024",
      image: photo2,
    },
    {
      title: "Mastering CSS Grid Layout",
      content: "CSS Grid Layout is a powerful tool for building responsive and complex layouts. In this post, we'll master the art of CSS Grid.",
      author: "Alice Styler",
      date: "Jan 20, 2024",
      image: photo3,
    },
    // Add more blog data as needed
  ]);

  return (
    <div name='blogs' className='w-full h-screen bg-[#1e1b4b] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-400 '>Blogs</p>
          <p className='py-4'>// Welcome to our blog, where we share insights, ideas, and stories to inspire and inform</p>
        </div>
        {blogData.map((blog, index) => (
          <div key={index} className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">{blog.title}</div>
              <p className="text-gray-700 text-base">{blog.content}</p>
            </div>
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src={blog.image} alt={`Avatar of ${blog.author}`} />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{blog.author}</p>
                <p className="text-gray-600">{blog.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
